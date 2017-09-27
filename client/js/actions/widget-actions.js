import { actionTypes } from '../action-types';

export const editWidgetActionCreator =
  widgetId => ({ type: actionTypes.EDIT, widgetId });

export const cancelWidgetActionCreator =
  () => ({ type: actionTypes.CANCEL });