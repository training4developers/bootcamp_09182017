import * as React from 'react';
import * as ReactDOM from 'react-dom';

const originalState = { counter: 0 };

const futureStates = [
  { counter: 1 },
  prevState => {
    return {
      counter: prevState.counter + 1,
    };
  },
  { counter: 1} 
];

const stateCallbacks = [ 
  () => { }, // first set state
  () => { }, // second set state 
]

const finalState = futureStates.reduce(
  (acc, current) => {

    if (typeof current === 'function') {
      return current(acc);
    } else {
      return Object.assign(acc, current);
    }

  }, originalState );


stateCallbacks.forEach(cb => cb());

console.log(finalState);



class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  onClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    }, () => {
      console.log('state set 1');
      console.log(this.state.counter);
    });
    this.setState(prevState => {

      console.log(prevState);
    
      return {
        counter: prevState.counter + 1,
      };
    
    }, () => {
      console.log('state set 2');
      console.log(this.state.counter);
    });
    console.log(this.state.counter);
  }

  render() {
    return <div>
      Counter: {this.state.counter}
      <button type="button" onClick={this.onClick}>Increment</button>
    </div>;
  }

}

ReactDOM.render(<Home />, document.querySelector('main'));