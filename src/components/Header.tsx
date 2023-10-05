function Header() {
  return (
    <div className="sticky left-0 right-0 top-0 z-10 mx-auto flex h-16 w-full max-w-5xl items-center justify-center justify-between bg-white p-2 shadow-sm">
      <div className="block h-full w-32">로고</div>
      <div className="h-full w-80">
        <form className="h-full w-full">
          <input
            className="my-1 h-10 w-full bg-gray-200 p-2 focus:outline-none"
            placeholder="물건 이름이나 태그를 검색해보세요"
          ></input>
        </form>
      </div>
      <div className="flex h-full w-32 items-center justify-end">
        로그인/회원가입
      </div>
    </div>
  );
}

export default Header;
