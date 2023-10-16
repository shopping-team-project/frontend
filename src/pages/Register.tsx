import { ReactElement, useState } from "react";
import Logo from "../components/Logo.tsx";

export default function Register(): ReactElement {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [addr, setAddr] = useState<string>("");
  const [addrDetail, setAddrDetail] = useState<string>("");

  const handleRegister = () => {
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
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름"
            className="input-base border-gray-400 bg-gray-100 pl-3"
          />
          <input
            type="nickName"
            id="nickName"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            placeholder="닉네임"
            className="input-base border-gray-400 bg-gray-100 pl-3"
          />
          <input
            type="addr"
            id="addr"
            value={addr}
            onChange={(e) => setAddr(e.target.value)}
            placeholder="주소"
            className="input-base border-gray-400 bg-gray-100 pl-3"
          />
          <input
            type="addrDetail"
            id="addrDetail"
            value={addrDetail}
            onChange={(e) => setAddrDetail(e.target.value)}
            placeholder="상세 주소"
            className="input-base border-gray-400 bg-gray-100 pl-3"
          />
          <hr />
          <button
            id="btn-register"
            className="input-base bg-orange-200"
            onClick={() => handleRegister()}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
