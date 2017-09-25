import * as React from 'react';
import * as ReactDOM from 'react-dom';


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

class Calculator extends React.Component {

  constructor(props) {
    super(props);

    console.log('creating the calculator');
  }

  render() {

    return <form>
      <input type="text" ref={input => this.operand = input} defaultValue={0} />
      <fieldset>
        <button type="button" onClick={() => this.props.add(Number(this.operand.value))}>Add</button>
        <button type="button" onClick={() => this.props.subtract(Number(this.operand.value))}>Subtract</button>
      </fieldset>
      <span>Result: {this.props.result}</span>
    </form>;
  }

}

store.subscribe(() => {
  ReactDOM.render(<Calculator result={store.getState() && store.getState().result}
    add={add} subtract={subtract} />, document.querySelector('main'));
});

ReactDOM.render(<Calculator result={store.getState() && store.getState().result}
  add={add} subtract={subtract} />, document.querySelector('main'));
