// src/stores/todoSlice.js (hoặc src/redux/todoSlice.js)
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export actions
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

// Export reducer mặc định
export default todoSlice.reducer; // 👈 Export mặc định ở đây
