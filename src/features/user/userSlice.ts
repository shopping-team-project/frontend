import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  value: boolean;
}

const initialState: userState = {
  value: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      // api 통신 및 기타 조건 만족(아이디, 비밀번호, 연결끊김 등 다양한 문제 통과 후)
      state.value = true;
    },
    logout: (state) => {
      // api 통신 후
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

// https://velog.io/@sweet_pumpkin/Megabyte-School-React-Redux%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0 페이지 참고
// user.tsx는 만들지 않는다?
// 기능 자체만으로 생성 후 로그인 페이지에서 관리 및 어느때나 로그아웃 용이하게 기능만 별도로 생성 및 각 페이지에서 기능 호출로 진행 -> 이야기 필요
