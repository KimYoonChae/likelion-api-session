import axios from "axios";

const sendAccessTokenToBackend = async (code) => {
  try {
    /*
    TODO: 2단계
    - axios.post를 사용하여 백엔드 서버에 authorization code를 전송하세요.
    - 요청 URL: 환경 변수에 저장된 REACT_APP_HOST_URL와 '/auth/google'을 조합하여 만드세요.
    - 요청 Body: 전달받은 code를 { code: code } 형태로 객체에 담아 보내세요.
    - 요청 성공 시:
        1. 서버로부터 받은 응답(response)에서 token과 memberId를 추출하세요.
        2. localStorage.setItem을 사용해 'accessToken'과 'memberId'를 저장하세요.
        3. 서버 응답 데이터(response.data)를 반환(return)하세요.
    */
    // 아래 코드를 완성하세요.
    const response = {}; // 예시: await axios.post(...)
    
    // 아래 코드를 완성하세요.
    
    return response.data; // 예시
  } catch (error) {
    console.error("❌ Login failed with error:", error);
    throw error;
  }
};

export default sendAccessTokenToBackend;