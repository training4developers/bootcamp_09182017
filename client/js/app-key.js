import * as React from 'react';
import * as ReactDOM from 'react-dom';

const items = [
  { name: 'Team 1', color: 'red', },
  { name: 'Team 2', color: 'green', },
  { name: 'Team 3', color: 'hot pink', },
];

let counter = 0;

class ListItem extends React.Component {
  constructor(props) {
    const myCounter = counter++;
    console.log('called list item constructor: ', myCounter);
    super(props);
    this.state = {
      itemName: props.item.name,
    };
  }

  componentWillReceiveProps(nextProps) {

    console.log('current props: ', this.props, 'next props:', nextProps);

    this.setState({
      itemName: nextProps.item.name,
    });

  }


  render() {
    return <li>props: {this.props.item.name}, state: {this.state.itemName}</li>;
  }
}

class UnorderedList extends React.Component {
  render() {
    return <ul>
      {this.props.items.map( (item, index) => <ListItem key={index} item={item} />)}
    </ul>;
  }
}

setTimeout(() => {

  ReactDOM.render(<UnorderedList items={items.slice(0,1).concat(items.slice(2))} />, document.querySelector('main'));

}, 4000);

ReactDOM.render(<UnorderedList items={items} />, document.querySelector('main'));
