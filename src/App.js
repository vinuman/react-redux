import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions/counterActionCreator";

function App() {
  const counter = useSelector((state) => state.a);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>Increment</button>
        <button onClick={() => dispatch(decrement(3))}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
}

export default App;
