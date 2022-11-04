import { increment, stepChange } from "./actions.mjs";

function Counter(store) {
  store.dispatch(increment());
  store.dispatch(stepChange(10));
}

export default Counter;
