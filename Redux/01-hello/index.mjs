import { legacy_createStore } from "redux";

const initialState = {
  count: 0,
  step: 1,
};

// Fonction Pure
// - prédictive, appelée avec des params donnés elle aura toujours le même retour
// ex de fct prédictive : sum(1, 2) === 3
// ex de fct non prédictive : Date.now() === ???, Math.random() === ???
// - ne pas modifier ses paramètres (retourner le nouveau state)
// - pas de side effect, pas de requete HTTP, pas d'appel à du stockage...
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { step: state.step, count: state.count + state.step };
    case 'step-change':
      return { step: action.value, count: state.count };
    default:
      return state;
  }
}

/** @type {import("redux").Store} */
const store = legacy_createStore(reducer);

console.log('state initial', store.getState());

store.subscribe(() => {
  console.log('state', store.getState());
});
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'step-change', value: 10 });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });


// Pattern Observer
// document.body.addEventListener('my-event', (event) => {});
// document.body.dispatchEvent(new Event('my-event'));
