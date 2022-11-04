import { configureStore } from "./configureStore.mjs";
import Counter from "./Counter.mjs";
import { countSelector } from "./selectors.mjs";

const store = configureStore();
store.subscribe(() => {
  console.log('count', countSelector(store.getState()));
});

Counter(store);
Counter(store);
Counter(store);

