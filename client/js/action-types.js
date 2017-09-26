import keyMirror from 'key-mirror';

export const actionTypes = keyMirror({
  INSERT_REQUEST: null,
  REPLACE_REQUEST: null,
  DELETE_REQUEST: null,
  EDIT: null,
  CANCEL: null,
  REFRESH_REQUEST: null,
  REFRESH_DONE: null,
});