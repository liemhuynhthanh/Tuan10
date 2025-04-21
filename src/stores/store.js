// src/stores/store.js (hoặc src/redux/store.js tùy thư mục của bạn)
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; 
import todoReducer from './todoSlice' // import reducer của counter hoặc các reducer khác
import themeReducer from './themeSlice';
import cartReducer from './cartSlice' // import reducer của theme
const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer, // Ví dụ reducer cho counter
  },
  
});

export default store;  // 👈 Đảm bảo dùng 'export default store;' ở đây
