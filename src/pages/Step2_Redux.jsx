import React from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import reduxStore from "../stores/reduxStore";

const CounterRedux = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4">Redux Counter</h1>
      <h2 className="text-xl mb-4">Count: {count}</h2>
      <button onClick={() => dispatch({ type: "DECREMENT" })} className="px-4 py-2 bg-red-500 text-white mx-2 rounded">-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })} className="px-4 py-2 bg-green-500 text-white mx-2 rounded">+</button>
    </div>
  );
};

const Step2_Redux = () => (
  <Provider store={reduxStore}>
    <CounterRedux />
  </Provider>
);

export default Step2_Redux;
