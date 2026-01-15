/*
jwt token test page 

1. 저장한 token을 가져와서 저 api 요청의 token으로 넣어주면 된다. 
2. 성공하면 인증성공이 나올것이고 실패하면 인증 실패가 나올 것
3. 토큰을 잘 넣어 성공했다면, 토큰의 인증시간이 3분이니 3분 후에 다시 인증 실패가 나올것이다. 
   이때 로그인 페이지로 이동시켜라(저장되어있는 토큰은 쓸모없으니 삭제시켜라)
*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TestPage = () => {
  const [authResult, setAuthResult] = useState("인증 확인 중...");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        // 1. 저장한 token 가져오기
        const token = localStorage.getItem("accessToken");
        
        console.log("저장된 토큰:", token ? "있음" : "없음");
        
        if (!token) {
          setAuthResult("❌ 토큰이 없습니다. 로그인이 필요합니다.");
          // 2초 후 로그인 페이지로 이동
          setTimeout(() => {
            navigate("/");
          }, 2000);
          return;
        }

        // 2. API 요청에 token 넣기
        const response = await axios.get(
          `${process.env.REACT_APP_HOST_URL}/test`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // 토큰 추가!
            },
          }
        );

        console.log("서버 응답:", response.data);

        // 3. 성공/실패 처리
        if (response.data === 1) {
          setAuthResult("✅ 인증 성공!");
          
          // 사용자 정보도 표시 (선택사항)
          const userInfo = localStorage.getItem("userInfo");
          if (userInfo) {
            const user = JSON.parse(userInfo);
            setAuthResult(`✅ 인증 성공!
환영합니다, ${user.name}님!
이메일: ${user.email}`);
          }
        } else {
          // 인증 실패 - 토큰 삭제하고 로그인 페이지로
          setAuthResult("❌ 인증 실패 (서버에서 0 반환)");
          console.log("인증 실패 - 토큰 삭제 및 로그인 페이지로 이동");
          
          // 토큰 삭제
          localStorage.removeItem("accessToken");
          localStorage.removeItem("userInfo");
          localStorage.removeItem("memberId");
          
          // 2초 후 로그인 페이지로 이동
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } catch (error) {
        // 에러 발생 - 토큰 삭제하고 로그인 페이지로
        setAuthResult("❌ 인증 실패 (에러 발생)");
        console.error("Error during authentication:", error);
        
        // 토큰 삭제
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userInfo");
        localStorage.removeItem("memberId");
        
        // 2초 후 로그인 페이지로 이동
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    };

    fetchAuthStatus();
  }, [navigate]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>JWT 인증 테스트</h2>
      <p style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
        결과: {authResult}
      </p>
      
      {authResult.includes("실패") && (
        <p style={{ color: "#666", fontSize: "14px", marginTop: "1rem" }}>
          2초 후 로그인 페이지로 이동합니다...
        </p>
      )}
    </div>
  );
};

export default TestPage;