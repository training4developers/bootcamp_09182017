import { actionTypes } from '../action-types';

const findWidgetIndex = (widgets, widgetId) =>
  widgets.findIndex(w => w.id === widgetId);


const insertWidget = (widgets, widget) => {
  return widgets.concat({
    ...widget,
    id: Math.max(...widgets.map(w => w.id) + 1 )
  });
};

const replaceWidget = (widgets, widget) => {
  
  const widgetIndex = findWidgetIndex(widgets, widget.id);
  
  return [
    ...widgets.slice(0, widgetIndex),
    widget,
    ...widgets.slice(widgetIndex + 1),
  ];
  
};

const deleteWidget = (widgets, widgetId) => {
  
  const widgetIndex = findWidgetIndex(widgets, widgetId);
  
  return [
    ...widgets.slice(0, widgetIndex),
    ...widgets.slice(widgetIndex + 1),
  ];
};

export const widgets = (state = [], action) => {

  switch (action.type) {
    case actionTypes.REFRESH_REQUEST:
      return action.widgets;
    case actionTypes.REFRESH_DONE:
      return action.widgets;
    default:
      return state;
  }

};
