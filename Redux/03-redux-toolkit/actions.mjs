// import { INCREMENT, STEP_CHANGE } from "./constants.mjs";

import rtk from "@reduxjs/toolkit";

// export function increment() {
//   return { type: INCREMENT };
// }

// export function stepChange(value) {
//   return { type: STEP_CHANGE, payload: value }
// }

// function createActionCreator(type) {
//   return function (payload) {
//     return { type, payload }
//   }
// }

// const increment = createActionCreator('increment');
// const stepChange = createActionCreator('step-change');

export const increment = rtk.createAction('INCREMENT');
export const stepChange = rtk.createAction('STEP_CHANGE');

