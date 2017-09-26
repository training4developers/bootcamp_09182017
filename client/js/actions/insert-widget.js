import { actionTypes } from '../action-types';

import { refreshWidgetsDone } from './refresh-widgets';

export const insertWidgetRequest =
  widget => ({ type: actionTypes.INSERT_REQUEST, widget });

export const insertWidget = widget => {
  
  return dispatch => {

    dispatch(insertWidgetRequest(widget));

    return fetch('http://localhost:3010/widgets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(widget),
    })
      .then(() => fetch('http://localhost:3010/widgets'))
      .then(res => res.json())
      .then(widgets => dispatch(refreshWidgetsDone(widgets)));

  };
  
};
