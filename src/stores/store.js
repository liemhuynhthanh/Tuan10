// src/stores/store.js (hoặc src/redux/store.js tùy thư mục của bạn)
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';  // import reducer của counter hoặc các reducer khác

const store = configureStore({
  reducer: {
    counter: counterReducer,  // Ví dụ reducer cho counter
  },
});

export default store;  // 👈 Đảm bảo dùng 'export default store;' ở đây
