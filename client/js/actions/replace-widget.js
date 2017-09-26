import { actionTypes } from '../action-types';

import { refreshWidgetsDone } from './refresh-widgets';

export const replaceWidgetRequest =
  widget => ({ type: actionTypes.REPLACE_REQUEST, widget });

export const replaceWidget = widget => {
  
  return dispatch => {

    dispatch(replaceWidgetRequest(widget));

    return fetch('http://localhost:3010/widgets/'
      + encodeURIComponent(widget.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(widget),
    })
      .then(() => fetch('http://localhost:3010/widgets'))
      .then(res => res.json())
      .then(widgets => dispatch(refreshWidgetsDone(widgets)));

  };
  
};
