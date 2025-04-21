import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../stores/counterSlice';

function CounterApp() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Đếm số: {count}</h1>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Tăng
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Giảm
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
