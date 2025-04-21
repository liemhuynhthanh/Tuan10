// src/stores/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// ✅ Phải có dòng này để xuất các action
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
