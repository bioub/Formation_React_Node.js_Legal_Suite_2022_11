import { INCREMENT, STEP_CHANGE } from "./constants.mjs";

export function increment() {
  return { type: INCREMENT };
}

export function stepChange(value) {
  return { type: STEP_CHANGE, payload: value }
}
