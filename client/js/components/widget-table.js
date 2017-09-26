import * as React from 'react';
import * as PropTypes from 'prop-types';

import { WidgetViewRow } from './widget-view-row';
import { WidgetEditRow } from './widget-edit-row';

export const WidgetTable = props => <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Color</th>
      <th>Size</th>
      <th>Quantity</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {props.widgets.map(w => w.id === props.editWidgetId
      ? <WidgetEditRow key={w.id} widget={w} onReplaceWidget={props.replaceWidget} onCancelWidget={props.cancelWidget}  />
      : <WidgetViewRow key={w.id} widget={w} onEditWidget={props.editWidget} onDeleteWidget={props.deleteWidget} />)}
    <WidgetEditRow onInsertWidget={props.insertWidget}  />
  </tbody>
</table>;

WidgetTable.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  editWidgetId: PropTypes.number,
  insertWidget: PropTypes.func.isRequired,
  replaceWidget: PropTypes.func.isRequired,
  deleteWidget: PropTypes.func.isRequired,
  editWidget: PropTypes.func.isRequired,
  cancelWidget: PropTypes.func.isRequired,
};

WidgetTable.defaultProps = {
  editWidgetId: 0,
};
