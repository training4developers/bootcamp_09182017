import { actionTypes } from '../action-types';

const refreshWidgetsRequest = () => ({ type: actionTypes.REFRESH_REQUEST, widgets:[] });

export const refreshWidgetsDone = widgets => ({ type: actionTypes.REFRESH_DONE, widgets });

export const refreshWidgets = () => {

  return dispatch => {

    dispatch(refreshWidgetsRequest());

    return fetch('http://localhost:3010/widgets')
      .then(res => res.json())
      .then(widgets => dispatch(refreshWidgetsDone(widgets)));

  };

};