import { ReactElement, useState } from "react";
import Logo from "../components/Logo.tsx";
import naverLogin from "../../public/naverLogin.png";
import googleLogin from "../../public/googleLogin.png";

function Login(): ReactElement {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    //TODO: Implement me
  };

  const handleCreateAccount = () => {
    //TODO: Implement me
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-5 h-20 w-20">
        <Logo />
      </div>
      <div className="w-1/3 border p-10 text-center text-xl">
        <div className="m-auto flex flex-col">
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디(이메일)"
            className="input-base border-gray-400 bg-gray-100 pl-3"
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="input-base border-gray-400 bg-gray-100 pl-3"
          />
          <button
            className="input-base bg-yellow-200"
            onClick={() => handleLogin()}
          >
            로그인
          </button>
          <hr />
          <button
            className="input-base bg-orange-200"
            onClick={() => handleCreateAccount()}
          >
            회원가입
          </button>
          <hr />
          <div className="my-4">소셜 로그인</div>
          <div className="flex justify-center gap-2">
            <a href="#">
              <img src={naverLogin} alt="naver login" className="h-10" />
            </a>
            <a href="#">
              <img src={googleLogin} alt="google login" className="h-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
