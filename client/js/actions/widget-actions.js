import { actionTypes } from '../action-types';

export const replaceWidgetActionCreator =
  widget => ({ type: actionTypes.REPLACE, widget });

export const deleteWidgetActionCreator =
  widgetId => ({ type: actionTypes.DELETE, widgetId });

export const editWidgetActionCreator =
  widgetId => ({ type: actionTypes.EDIT, widgetId });

export const cancelWidgetActionCreator =
  () => ({ type: actionTypes.CANCEL });