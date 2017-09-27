import { actionTypes } from '../action-types';

import { refreshWidgetsDone } from './refresh-widgets';

export const deleteWidgetRequest =
  widgetId => ({ type: actionTypes.DELETE_REQUEST, widgetId });

export const deleteWidget = widgetId => {
  
  return dispatch => {

    dispatch(deleteWidgetRequest(widgetId));

    return fetch('http://localhost:3010/widgets/'
      + encodeURIComponent(widgetId), { method: 'DELETE' })
      .then(() => fetch('http://localhost:3010/widgets'))
      .then(res => res.json())
      .then(widgets => dispatch(refreshWidgetsDone(widgets)));

  };
  
};
