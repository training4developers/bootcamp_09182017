
const createAddAction = value => ({ type: 'ADD', value });
const createSubtractAction = value => ({ type: 'SUBTRACT', value });



const calcReducer = (state = { result: 0 }, action) => {

  console.log('state: ', state, 'action: ', action);

  switch(action.type) {
    case 'ADD':
      return Object.assign({}, state, { result: state.result + action.value});
    case 'SUBTRACT':
      return { ...state, result: state.result + action.value };
    default:
      return state;
  }

};

const createStore = reducer => {

  let currentState = undefined;
  const subscriptions = [];

  return {
    getState: () => currentState,
    subscribe: cb => subscriptions.push(cb),
    dispatch: action => {
      currentState = reducer(currentState, action);
      subscriptions.forEach(cb => cb());
    },
  };

};

const store = createStore(calcReducer);

store.subscribe(() => {
  console.log(store.getState());
});

const bindActionCreators = (actionMap, dispatch) => {

  const actions = {};

  Object.keys(actionMap).forEach(actionKey => {
    actions[actionKey] = (...value) => dispatch(actionMap[actionKey](...value));
  });

  return actions;
};

const { add, subtract } = bindActionCreators({
  add: createAddAction,
  subtract: createSubtractAction
}, store.dispatch);

add(1);
subtract(2);
add(3);
subtract(4);
add(5);


// store.dispatch(createAddAction(1));
// store.dispatch(createSubtractAction(2));
// store.dispatch(createAddAction(3));
// store.dispatch(createSubtractAction(4));
// store.dispatch(createAddAction(5));


console.log(store.getState());

