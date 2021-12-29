import { createSlice } from '@reduxjs/toolkit';

export type UserInfoType = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  name: string;
  avatar: string;
};

export interface UserState {
  userLogin: UserInfoType;
}

const initialState: UserState = {
  userLogin: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.userLogin = action.payload;
    },
    updateUser: (state, action) => {
      const data = action.payload;
      state.userLogin = { ...state.userLogin, ...data };
    },
    logOut: state => {
      state.userLogin = null;
    },
  },
});

export const { saveUser, updateUser, logOut } = userSlice.actions;

export default userSlice.reducer;
