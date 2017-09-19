import * as React from 'react';
import * as ReactDOM from 'react-dom';

const colorList = [
  { id: 1, name: 'green', hexCode: '' },
  { id: 2, name: 'orange', hexCode: '' },
  { id: 3, name: 'blue', hexCode: '' },
];


import { ColorTool } from './components/color-tool';

ReactDOM.render(<ColorTool colors={colorList} />, document.querySelector('main'));
