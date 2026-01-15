import React from "react";
import styled from "styled-components";
import GoogleLoginBtn from "../../asset/GoogleLoginBtn.svg";

/*
시작 로그인 페이지 
이곳에는 google oauth url과 연결된 구글 로그인 버튼이 있어야한다. 

google oauth에서 만든 client id와 redirect url 그리고 어떤 토큰을 받을 것인지 url뒤에 명시해주어야 한다.
그리고 사용자의 어떤 정보를 받을지 scope또한 들어가야한다. 

주의: URL은 반드시 한 줄로 작성해야 합니다! 줄바꿈이나 공백이 있으면 400 에러 발생!
*/

const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    // ✅ 수정: URL을 한 줄로 작성 (줄바꿈 없음!)
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}&response_type=code&scope=email profile`;
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