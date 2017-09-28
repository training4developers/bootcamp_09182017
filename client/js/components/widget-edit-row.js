import * as React from 'react';
import * as PropTypes from 'prop-types';

export const WidgetEditRow = props => {

  let nameInput;
  let descriptionInput;
  let colorInput;
  let sizeInput;
  let quantityInput;

  const getFormData = () => ({
    name: nameInput.value,
    description: descriptionInput.value,
    color: colorInput.value,
    size: sizeInput.value,
    quantity: Number(quantityInput.value),
  });

  const clearForm = () => {
    nameInput.value = '';
    descriptionInput.value = '';
    colorInput.value = '';
    sizeInput.value = '';
    quantityInput.value = '';
  };

  const saveWidget = () => {
    if (props.widget) {
      props.onReplaceWidget({
        id: props.widget.id,
        ...getFormData()
      });
    } else {
      props.onInsertWidget(getFormData());
      clearForm();
    }
  }
  
  const cancelWidget = () => {
    if (props.widget) {
      props.onCancelWidget();
    } else {
      clearForm();
    }
  }

  return <tr>
    <td><input type="text" ref={input => nameInput = input} defaultValue={props.widget && props.widget.name} /></td>
    <td><input type="text" ref={input => descriptionInput = input} defaultValue={props.widget && props.widget.description} /></td>
    <td><input type="text" ref={input => colorInput = input} defaultValue={props.widget && props.widget.color} /></td>
    <td><input type="text" ref={input => sizeInput = input} defaultValue={props.widget && props.widget.size} /></td>
    <td><input type="number" ref={input => quantityInput = input} defaultValue={props.widget && props.widget.quantity} /></td>
    <td>
      <button type="button" onClick={saveWidget}>Save</button>
      <button type="button" onClick={cancelWidget}>Cancel</button>
    </td>
  </tr>;

};

WidgetEditRow.propTypes = {
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
