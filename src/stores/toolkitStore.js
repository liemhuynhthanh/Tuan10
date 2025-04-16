import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk: tăng sau 1 giây
export const incrementAsync = createAsyncThunk("counter/incrementAsync", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
});

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1 },
    decrement: (state) => { state.count -= 1 },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.count += action.payload;
    });
  },
});

export const { increment, decrement } = counterSlice.actions;

const toolkitStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default toolkitStore;  // Ensure this export is correct
