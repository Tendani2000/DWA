// Define action types
const add = 'add';
const subtract = 'suntract';

// Action creators
const addAction = () => ({ type: add });
const subtractAction = () => ({ type: subtract });

// Reducer function to manage state
const tallyReducer = (state = 0, action) => {
  switch (action.type) {
    case add:
      return state + 1;
    case subtract:
      return state - 1;
    default:
      return state;
  }
};

// Store implementation
const createStore = (reducer) => {
  let state = undefined;
  let subscribers = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    subscribers.forEach((subscriber) => subscriber());
  };

  const subscribe = (subscriber) => {
    subscribers.push(subscriber);
    return () => {
      subscribers = subscribers.filter((sub) => sub !== subscriber);
    };
  };

  return { getState, dispatch, subscribe };
};

// Create a store with the tallyReducer
const store = createStore(tallyReducer);

// Subscribe to state changes and log them to the console
const unsubscribe = store.subscribe(() => {
  console.log('Current Tally Count:', store.getState());
});

// Dispatch actions to modify the state
store.dispatch(addAction()); // Increment
store.dispatch(addAction()); // Increment
store.dispatch(subtractAction()); // Decrement

// Unsubscribe to stop logging state changes
unsubscribe();
store.dispatch(addAction()); // Increment (won't be logged)
