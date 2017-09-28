import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../action-types';

import { refreshWidgetsDone } from './refresh-widgets';

export const deleteWidgetRequest =
  widgetId => ({ type: actionTypes.DELETE_REQUEST, widgetId });

// export const deleteWidget = widgetId => {
  
//   return dispatch => {

//     dispatch(deleteWidgetRequest(widgetId));

//     return fetch('http://localhost:3010/widgets/'
//       + encodeURIComponent(widgetId), { method: 'DELETE' })
//       .then(() => fetch('http://localhost:3010/widgets'))
//       .then(res => res.json())
//       .then(widgets => dispatch(refreshWidgetsDone(widgets)));

//   };
  
// };

export const deleteWidgetSaga = function*() {

  yield takeLatest('DELETE_REQUEST', function* ({ widgetId }) {

    yield fetch('http://localhost:3010/widgets/'
      + encodeURIComponent(widgetId), { method: 'DELETE' });

    const widgets = yield fetch('http://localhost:3010/widgets')
      .then(res => res.json());

    yield put(refreshWidgetsDone(widgets));

  });

};
