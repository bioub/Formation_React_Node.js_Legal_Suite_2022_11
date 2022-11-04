import rtk from "@reduxjs/toolkit";
import { increment, stepChange } from "./actions.mjs";

const initialState = {
  count: 0,
  step: 1,
  name: "romain",
};

// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case increment.type:
//       return { ...state, count: state.count + state.step };
//     case stepChange.type:
//       return { ...state, step: action.payload };
//     default:
//       return state;
//   }
// }

export const reducer = rtk.createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.count = state.count + state.step;
      return state;
    })
    .addCase(stepChange, (state, action) => {
      state.step = action.payload;
      return state;
    });
});
