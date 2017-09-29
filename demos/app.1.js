import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const createAddAction = value => ({ type: 'ADD', value });
const createSubtractAction = value => ({ type: 'SUBTRACT', value });

const calcReducer = (state = { result: 0 }, action) => {

  switch(action.type) {
    case 'ADD':
      return Object.assign({}, state, { result: state.result + action.value});
    case 'SUBTRACT':
      return { ...state, result: state.result - action.value };
    default:
      return state;
  }

};

const store = createStore(calcReducer);

const mapStateToProps = ({ result }) => ({ result });

const mapDispatchToProps = dispatch => bindActionCreators({
  add: createAddAction,
  subtract: createSubtractAction
}, dispatch);

// const connect = (mapStateToPropsFn, mapDispatchToPropsFn) => {

//   return (PresentationalComponent) => {

//     return class ContainerComponent extends React.Component {

//       constructor(props) {
//         super(props);
//         this.presentationalProps = mapDispatchToPropsFn(this.props.store.dispatch);
//       }

//       componentDidMount() {
//         this.unsubscribeStore = this.props.store.subscribe(() => {
//           this.presentationalProps = Object.assign(
//             {},
//             this.presentationalProps,
//             mapStateToPropsFn(this.props.store.getState())
//           );
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribeStore();
//       }

//       render() {
//         return <PresentationalComponent {...this.presentationalProps} />;
//       }

//     };

//   };

// };


class Calculator extends React.Component {

  constructor(props) {
    super(props);
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

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);


ReactDOM.render(<CalculatorContainer store={store} />, document.querySelector('main'));
