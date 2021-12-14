import { createSlice } from '@reduxjs/toolkit';

export const CommonSlice = createSlice({
  name: 'common',
  initialState: {
    colorMode: 'light',
  },
  reducers: {
    setThemeLight: (state, _action) => {
      state.colorMode = 'light';
    },
    setThemeDark: (state, _action) => {
      state.colorMode = 'dark';
    },
  },
});

export const { setThemeLight, setThemeDark } = CommonSlice.actions;

export default CommonSlice.reducer;
