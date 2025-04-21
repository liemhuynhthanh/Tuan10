// src/stores/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],           // Danh sách người dùng
  user: null,          // Người dùng hiện tại
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      const { username, password } = action.payload;
      const exists = state.users.find(u => u.username === username);
      if (!exists) {
        state.users.push({ username, password });
      }
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const found = state.users.find(u => u.username === username && u.password === password);
      if (found) {
        state.user = found;
        state.isLoggedIn = true;
      }
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    }
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
