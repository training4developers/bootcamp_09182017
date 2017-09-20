import * as React from 'react';

import { Color } from '../models/color';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: props.colors.slice(),
      colorName: '',
      colorHexCode: '',
      colorSortOrder: 0,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    });
  }

  onClick = () => {
    console.log(typeof this.state.colorSortOrder);
    this.setState({
      colors: this.state.colors.concat(new Color({
        id: Math.max(...this.state.colors.map(c => c.id)) + 1,
        name: this.state.colorName,
        hexCode: this.state.colorHexCode,
        sortOrder: this.state.colorSortOrder,
      })),
      colorName: '',
      colorHexCode: '',
    });
  }

  render() {
    return <div>
      <header><h1>Color Tool</h1></header>
      <ul>
        {this.state.colors.map(color => <li key={color.id}>{color.sortOrder} - {color.colorInfo()}</li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="color-name-input">Color Name:</label>
          <input type="text" id="color-name-input" name="colorName"
            value={this.state.colorName} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="color-hex-code-input">Color HexCode:</label>
          <input type="color" id="color-hex-code-input" name="colorHexCode"
            value={this.state.colorHexCode} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="color-sort-order-input">Sort Order:</label>
          <input type="number" id="color-sort-order-input" name="colorSortOrder"
            value={this.state.colorSortOrder} onChange={this.onChange} />
        </div>
        <button type="button" onClick={this.onClick}>Add Color</button>
      </form>
    </div>;

  }

}