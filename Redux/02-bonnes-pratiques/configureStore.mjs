import { legacy_createStore } from "redux";
import { reducer } from "./reducer.mjs";

export function configureStore() {
  /** @type {import("redux").Store} */
  const store = legacy_createStore(reducer);

  return store;
}
