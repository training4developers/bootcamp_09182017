import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { widgets } from './reducers/widgets';
import { editWidgetId } from './reducers/edit-widget-id';

export const appStore = createStore(
  combineReducers({ widgets, editWidgetId }),
  applyMiddleware(thunk),
);