import { login, logout } from "../features/user/userSlice";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";

function Login() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex">
      테스트목적 텍스트
      <button onClick={() => dispatch(login())}>
        <Link to="/">로그인</Link>
      </button>
      <button onClick={() => dispatch(logout())}>
        <Link to="/">로그아웃</Link>
      </button>
    </div>
  );
}

export default Login;
