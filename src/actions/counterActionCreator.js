import { INCREMENT, DECREMENT, RESET } from "./actionTypes";

export const increment = (value) => {
  return {
    type: "INCREMENT",
    payload: value,
  };
};
export const decrement = (value) => {
  return {
    type: "DECREMENT",
    payload: value,
  };
};
export const reset = (value) => {
  return {
    type: "RESET",
    payload: value,
  };
};
