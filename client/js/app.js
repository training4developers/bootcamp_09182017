
const createAddAction = value => ({ type: 'ADD', value });
const createSubtractAction = value => ({ type: 'SUBTRACT', value });

const actions = [
  createAddAction(1),
  createSubtractAction(2),
  { type: 'ADD', value: 3 },
  { type: 'SUBTRACT', value: 4 },
  { type: 'ADD', value: 5 }
];

const initialState = 0;

const finalState = actions.reduce( (state, action) => {

  console.log('state: ', state, 'action: ', action);

  switch(action.type) {
    case 'ADD':
      return state + action.value;
    case 'SUBTRACT':
      return state - action.value;
    default:
      return state;
  }

}, initialState );

console.log(finalState);

