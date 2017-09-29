import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { widgets } from './reducers/widgets';
import { editWidgetId } from './reducers/edit-widget-id';
import { refreshWidgetsSaga } from './actions/refresh-widgets';
import { insertWidgetSaga } from './actions/insert-widget';
import { deleteWidgetSaga } from './actions/delete-widget';
import { replaceWidgetSaga } from './actions/replace-widget';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, sagaMiddleware),
);

export const appStore = createStore(
  combineReducers({ widgets, editWidgetId }),
  enhancer,
);

sagaMiddleware.run(refreshWidgetsSaga);
sagaMiddleware.run(insertWidgetSaga);
sagaMiddleware.run(deleteWidgetSaga);
sagaMiddleware.run(replaceWidgetSaga);