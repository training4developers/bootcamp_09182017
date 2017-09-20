import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Color } from './models/color';

const colorList = [
  new Color({ id: 1, name: 'green', hexCode: '#00FF00', sortOrder: 1 }),
  new Color({ id: 2, name: 'orange', hexCode: '#FFA500', sortOrder: 2 }),
  new Color({ id: 3, name: 'blue', hexCode: '#0000FF', sortOrder: 3 }),
];


import { ColorTool } from './components/color-tool';

ReactDOM.render(<ColorTool colors={colorList} />, document.querySelector('main'));


// import colorNamer from 'color-namer';
// console.log(colorNamer('#FF0000').html[0].name);
