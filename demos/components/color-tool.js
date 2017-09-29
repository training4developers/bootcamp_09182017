import * as React from 'react';

import { Color } from '../models/color';
import { Colors } from '../models/colors';

import { ToolHeader } from './tool-header';
import { UnorderedList } from './unordered-list';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.colors = new Colors(props.colors.slice());

    this.state = {
      colors: this.colors.sortedColors,
    };
  }

  addColor = (color) => {

    this.colors.addColor(color);

    this.setState({
      colors: this.colors.sortedColors
    });
  }

  render() {

    return <div> 
      <ToolHeader>
        <h1>Color</h1>
        <small>Best Color Tool on Earth!</small>
      </ToolHeader>
      <UnorderedList listTitle="Fav Color List">
        {this.props.colors.map(c => <li key={c.id}>
          <ToolHeader>
            <h1>{c.name}</h1>
          </ToolHeader>
        </li>)}
      </UnorderedList>
      <ColorForm onSubmitForm={this.addColor} />
    </div>;

  }

}