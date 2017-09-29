import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Color } from './models/color';

const colorList = [
  new Color({ id: 1, name: 'green', hexCode: '#00FF00', sortOrder: 1 }),
  new Color({ id: 2, name: 'orange', hexCode: '#FFA500', sortOrder: 2 }),
  new Color({ id: 3, name: 'blue', hexCode: '#0000FF', sortOrder: 3 }),
];

import { ColorTool } from './components/color-tool';

// class DomDemo extends React.Component {

//   render() {

//     const headerText = 'This is from the DomDemo Component';

//     // shadow dom
//     return <section>
//       <h3>{headerText}</h3>
//       <div>
//         {this.props.children}
//       </div>
//     </section>;

//   }
// }

// class Form extends React.Component {
//   render() {
//     return this.props.children;
//   }
// }

// class Input extends React.Component {
//   render() {
//     // code to draw input box
//     // code to set value from this.props.vaue
//   }
// }


//ReactDOM.render(<ColorTool colors={colorList} />, document.querySelector('main'));


