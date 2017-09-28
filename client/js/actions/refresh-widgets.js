import { put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../action-types';

export const refreshWidgetsRequest = () => ({ type: actionTypes.REFRESH_REQUEST, widgets:[] });

export const refreshWidgetsDone = widgets => ({ type: actionTypes.REFRESH_DONE, widgets });

// export const refreshWidgets = () => {
//   return dispatch => {
//     dispatch(refreshWidgetsRequest());
//     return fetch('http://localhost:3010/widgets')
//       .then(res => res.json())
//       .then(widgets => dispatch(refreshWidgetsDone(widgets)));
//   };
// };

export const refreshWidgetsSaga = function*() {

  yield takeLatest(actionTypes.REFRESH_REQUEST, function*() {
    const widgets = yield fetch('http://localhost:3010/widgets')
      .then(res => res.json());
    yield put(refreshWidgetsDone(widgets));
  });
  
};