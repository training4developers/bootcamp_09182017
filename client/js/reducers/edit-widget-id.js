import { actionTypes } from '../action-types';

export const editWidgetId = (state = 0, action) => {
  
  switch (action.type) {
    case actionTypes.REPLACE:
      return 0;
    case actionTypes.EDIT:
      return action.widgetId;
    case actionTypes.CANCEL:
      return 0;
    default:
      return state;
  }
  
};