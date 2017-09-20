import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Color {

  constructor(colorData) {
    Object.assign(this, colorData);
  }

  colorInfo() {
    return this.name + ' ' + this.hexCode;
  }
}


const colorList = [
  new Color({ id: 1, name: 'green', hexCode: '#00FF00' }),
  new Color({ id: 2, name: 'orange', hexCode: '#FFA500' }),
  new Color({ id: 3, name: 'blue', hexCode: '#0000FF' }),
];


import { ColorTool } from './components/color-tool';

ReactDOM.render(<ColorTool colors={colorList} />, document.querySelector('main'));
