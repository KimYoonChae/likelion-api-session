import React from "react";
import styled from "styled-components";
import GoogleLoginBtn from "../../asset/GoogleLoginBtn.svg";

/*
시작 로그인 페이지 
이곳에는 google oauth url과 연결된 구글 로그인 버튼이 있어야한다. 

google oauth에서 만든 client id와 redirecton url 그리고 어떤 토큰을 받을 것인지 url뒤에 명시해주어야 한다.
그리고 사용자의 어떤 정보를 받을지 scope또한 들어가야한다. 

*/

const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    const googleLoginUrl = ``; // 이 부분을 채워주세요.
    /*
    TODO:
    - 구글 로그인 버튼을 클릭하면 구글 인증 화면으로 이동하도록 URL을 완성하기
    - client_id, redirect_uri는 .env 파일에 저장된 환경 변수를 사용해야함
    - 백엔드와 통신하기 위해 response_type을 'code'로 설정하기
    */

    // 완성된 URL로 이동
    window.location.href = googleLoginUrl;
  };

  return (
    <Wrapper>
      <LoginBtn src={GoogleLoginBtn} alt="" onClick={handleGoogleLogin} />
    </Wrapper>
  );
};

export default GoogleLogin;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBtn = styled.img`
  cursor: pointer;
`;