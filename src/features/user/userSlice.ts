import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface userState {
  value: boolean;
}

const initialState: userState = {
  value: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      // 1. 입력을 안함
      // 2. 아이디 또는 비밀번호 틀림
      // 3. 로그인 성공api 회신 이후
      state.value = true;
    },
    logout: (state) => {
      // api 회신 이후
      state.value = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;

// https://velog.io/@sweet_pumpkin/Megabyte-School-React-Redux%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0 페이지 참고
