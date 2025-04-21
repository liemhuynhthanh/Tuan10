// src/stores/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Slice quản lý theme
const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light', // Giá trị mặc định là 'light'
  reducers: {
    toggleTheme: (state) => {
      return state === 'light' ? 'dark' : 'light'; // Chuyển đổi giữa dark và light
    },
  },
});

// Xuất default reducer và các actions
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer; // Đảm bảo xuất default cho reducer
