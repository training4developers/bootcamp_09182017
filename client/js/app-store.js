import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { widgets } from './reducers/widgets';
import { editWidgetId } from './reducers/edit-widget-id';
import { refreshWidgetsSaga } from './actions/refresh-widgets';
import { insertWidgetSaga } from './actions/insert-widget';
import { deleteWidgetSaga } from './actions/delete-widget';
import { replaceWidgetSaga } from './actions/replace-widget';

const sagaMiddleware = createSagaMiddleware();

export const appStore = createStore(
  combineReducers({ widgets, editWidgetId }),
  applyMiddleware(thunk, sagaMiddleware),
);

sagaMiddleware.run(refreshWidgetsSaga);
sagaMiddleware.run(insertWidgetSaga);
sagaMiddleware.run(deleteWidgetSaga);
sagaMiddleware.run(replaceWidgetSaga);