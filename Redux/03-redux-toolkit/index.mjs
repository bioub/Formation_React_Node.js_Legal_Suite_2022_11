import rtk from "@reduxjs/toolkit";
import Counter from "./Counter.mjs";
import { reducer } from "./reducer.mjs";
import { countSelector } from "./selectors.mjs";

const store = rtk.configureStore({
  reducer: reducer
});
store.subscribe(() => {
  console.log('count', countSelector(store.getState()));
});

Counter(store);
Counter(store);
Counter(store);

