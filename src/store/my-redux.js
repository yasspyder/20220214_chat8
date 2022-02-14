// // state
// const state = {
//   increment: 0,
// };
// // action
// const action = { type: "INCREMENT" };
// const action2 = { type: "INCREMENT2", payload: [1, 2, 3] };

// // action creator
// const increment = () => {
//   return { type: "INCREMENT" };
// };
// const increment2 = (payload) => {
//   return { type: "INCREMENT2", payload };
// };

// // reducer
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, increment: state.increment + 1 };
//     case "DECREMENT":
//       return { ...state, increment: state.increment - 1 };
//     default:
//       return state;
//   }
// };

// // store = {}
// // - getState() - возвращает текущее состояние
// // - subscribe() - позволяет сделать подписку на изменение состояния
// // - dispatch(ACTION) - позволяет обновлять состояние на основе действия

export const createStore = (initialState, reducer) => {
  let currentState = initialState;
  const listeners = [];

  const getState = () => currentState;

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const dispatch = (action) => {
    currentState = reducer(currentState, action);

    listeners.forEach((listener) => listener());

    return action;
  };

  return { getState, subscribe, dispatch };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const store = createStore(
  { count: 0, firstName: "firstName", lastName: "lastName" },
  reducer
);
