const KakaoLogin = () => {
  const CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID; //REST API KEY
  const REDIRECT_URL = 'https://bdw-my-todo.vercel.app/kakao-auth'; // 배포용Redirect URI

  // const REDIRECT_URL = 'http://localhost:3000/auth'; // 로컬용 Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;
  const LoginHandler = async () => {
    // window.location.href = `${kakaoURL}&prompt=login`;
    window.location.href = kakaoURL;
  };
  return (
    <>
      <img
        src="kakao_icon.png"
        onClick={LoginHandler}
        className="sns-login-icon"
      ></img>
    </>
  );
};
export default KakaoLogin;
