import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Third extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor: third');
  }

  componentWillMount() {
    console.log('component will mount: third');
  }

  componentDidMount() {
    console.log('component did mount: third');
  }

  componentWillReceiveProps() {
    console.log('component will receive props: third');
  }

  componentWillUpdate() {
    console.log('component will update: third');
  }

  componentDidUpdate() {
    console.log('component did update: third');
  }

  render() {
    console.log('render: third');
    return <div>
      Third {this.props.num}
    </div>;
  }
}

class Second extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor: second');
  }

  componentWillMount() {
    console.log('component will mount: second');
  }

  componentDidMount() {
    console.log('component did mount: second');
  }

  componentWillReceiveProps() {
    console.log('component will receive props: second');
  }

  componentWillUpdate() {
    console.log('component will update: second');
  }

  componentDidUpdate() {
    console.log('component did update: second');
  }
  
  render() {
    console.log('render: second');
    return <div>
      Second {this.props.num}
      <Third {...this.props} />
    </div>;
  }
}

class First extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor: first');
  }

  componentWillMount() {
    console.log('component will mount: first');
  }

  componentDidMount() {
    console.log('component did mount: first');
  }

  componentWillReceiveProps() {
    console.log('component will receive props: first');
  }

  componentWillUpdate() {
    console.log('component will update: first');
  }

  componentDidUpdate() {
    console.log('component did update: first');
  }
  
  render() {
    console.log('render: first');
    return <div>
      First {this.props.num}
      <Second {...this.props} />
    </div>;
  }
}

setTimeout(() => {

  ReactDOM.render(<First num={27} />, document.querySelector('main'));

}, 5000);


ReactDOM.render(<First num={42} />, document.querySelector('main'));

