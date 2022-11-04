import { INCREMENT, STEP_CHANGE } from "./constants.mjs";

const initialState = {
  count: 0,
  step: 1,
  name: 'romain'
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + state.step };
    case STEP_CHANGE:
      return { ...state, step: action.payload };
    default:
      return state;
  }
}
