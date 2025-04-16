import React from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import toolkitStore, { increment, decrement, incrementAsync } from "../stores/toolkitStore";

const CounterToolkit = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4">Redux Toolkit Counter</h1>
      <h2 className="text-xl mb-4">Count: {count}</h2>
      <div className="space-x-2">
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
        <button onClick={() => dispatch(incrementAsync())} className="px-4 py-2 bg-blue-500 text-white rounded">Async +</button>
      </div>
    </div>
  );
};

const Step3_Toolkit = () => (
  <Provider store={toolkitStore}>
    <CounterToolkit />
  </Provider>
);

export default Step3_Toolkit;
