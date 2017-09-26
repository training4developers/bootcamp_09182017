import * as React from 'react';
import * as PropTypes from 'prop-types';

export const WidgetViewRow = props => <tr>
  <td>{props.widget.name}</td>
  <td>{props.widget.description}</td>
  <td>{props.widget.color}</td>
  <td>{props.widget.size}</td>
  <td>{props.widget.quantity}</td>
  <td>
    <button type="button" onClick={() => props.onEditWidget(props.widget.id)}>Edit</button>
    <button type="button" onClick={() => props.onDeleteWidget(props.widget.id)}>Delete</button>
  </td>
</tr>;

WidgetViewRow.propTypes = {
  onEditWidget: PropTypes.func.isRequired,
  onDeleteWidget: PropTypes.func.isRequired,
  widget: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,    
  }).isRequired,
};