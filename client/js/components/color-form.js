import * as React from 'react';

import { Color } from '../models/color';

import { FormInput } from './form-input';

export class ColorForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colorName: '',
      colorHexCode: '',
      colorSortOrder: 0,
    };
  }

  onChange = (e) => {
    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    });
  }
  
  submitForm = () => {
    console.log(this.state);
    this.props.onSubmitForm(new Color({
      name: this.state.colorName,
      hexCode: this.state.colorHexCode,
      sortOrder: this.state.colorSortOrder,
    }));
  }

  render() {

    return <form>
      <FormInput controlId="color-name-input" labelText="Color Name"
        fieldName="colorName" fieldValue={this.state.colorName}
        onChange={this.onChange} />
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
      <button type="button" onClick={this.submitForm}>Add Color</button>
    </form>;

  }

}