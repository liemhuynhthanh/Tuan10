import React, { useReducer } from "react";

const initialState = { count: 0 };

 function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Step1_UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4">useReducer Demo</h1>
      <h2 className="text-xl mb-4">Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })} className="px-4 py-2 bg-red-500 text-white mx-2 rounded">-</button>
      <button onClick={() => dispatch({ type: "increment" })} className="px-4 py-2 bg-green-500 text-white mx-2 rounded">+</button>
    </div>
  );
};

export default Step1_UseReducer;
