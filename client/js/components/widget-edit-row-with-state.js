import * as React from 'react';
import * as PropTypes from 'prop-types';

import { BaseForm } from './base-form';

export class WidgetEditRow extends BaseForm {

  static propTypes = {
    onReplaceWidget: PropTypes.func,
    onInsertWidget: PropTypes.func,
    onCancelWidget: PropTypes.func,
    widget: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,    
    }),
  };

  emptyForm = () => ({
    name: '',
    description: '',
    color: '',
    size: '',
    quantity: 0,
  });

  constructor(props) {
    super(props);

    if (this.props.widget) {
      this.state = { ...this.props.widget };
    } else {
      this.state = this.emptyForm();
    }
  }

  saveWidget = () => {
    if (this.props.widget) {
      this.props.onReplaceWidget({
        ...this.state,
        id: this.props.widget.id,
      });
    } else {
      this.props.onInsertWidget({
        ...this.state
      });
      this.setState(this.emptyForm());
    }
  }
  
  cancelWidget = () => {
    if (this.props.widget) {
      this.props.onCancelWidget();
    } else {
      this.setState(this.emptyForm());
    }
  }

  render() {
    return <tr>
      <td><input type="text" name="name"
        value={this.state.name} onChange={this.onChange} /></td>
      <td><input type="text" name="description"
        value={this.state.description} onChange={this.onChange} /></td>
      <td><input type="text" name="color"
        value={this.state.color} onChange={this.onChange} /></td>
      <td><input type="text" name="size"
        value={this.state.size} onChange={this.onChange} /></td>
      <td><input type="number" name="quantity"
        value={this.state.quantity} onChange={this.onChange} /></td>
      <td>
        <button type="button" onClick={this.saveWidget}>Save</button>
        <button type="button" onClick={this.cancelWidget}>Cancel</button>
      </td>
    </tr>;
  }

}
  
