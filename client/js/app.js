import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appStore } from './app-store';
import * as widgetActionCreators from './actions/widget-actions';
import { refreshWidgetsRequest } from './actions/refresh-widgets';
import { insertWidgetRequest } from './actions/insert-widget';
import { deleteWidgetRequest } from './actions/delete-widget';
import { replaceWidgetRequest } from './actions/replace-widget';
import { WidgetTool } from './components/widget-tool';

const WidgetToolContainer = connect(
  ({ widgets, editWidgetId }) => ({ widgets, editWidgetId }),
  dispatch => bindActionCreators({
    insertWidget: insertWidgetRequest,
    replaceWidget: replaceWidgetRequest,
    deleteWidget: deleteWidgetRequest,
    editWidget: widgetActionCreators.editWidgetActionCreator,
    cancelWidget: widgetActionCreators.cancelWidgetActionCreator,
    refreshWidgets: refreshWidgetsRequest,
  }, dispatch))(WidgetTool);

ReactDOM.render(<Provider store={appStore}>
  <WidgetToolContainer />
</Provider>, document.querySelector('main'));