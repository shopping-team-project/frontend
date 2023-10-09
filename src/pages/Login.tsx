import { ReactElement, useState } from "react";
import Logo from "../components/Logo.tsx";

function Login(): ReactElement {
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    //TODO: Implement
  };

  return (
    <div className="flex-col">
      <Logo />
      <div>로그인</div>
      <input type="text" placeholder="아이디(이메일)" />
    </div>
  );
}

export default Login;
