import * as React from 'react';

export class FormInput extends React.Component {

  onChange = (e) => {
    this.props.onChange(e);
  }

  render() {
    return <div>
      <label htmlFor={this.props.controlId}>{this.props.labelText} ></label>
      <input type="text" id={this.props.controlId} name={this.props.fieldName}
        value={this.props.fieldValue} onChange={this.onChange} />
    </div>;
  }

}