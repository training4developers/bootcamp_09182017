// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { connect, Provider } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import { appStore } from './app-store';
// import * as widgetActionCreators from './actions/widget-actions';
// import { refreshWidgets } from './actions/refresh-widgets';
// import { insertWidget } from './actions/insert-widget';
// import { deleteWidget } from './actions/delete-widget';
// import { replaceWidget } from './actions/replace-widget';
// import { WidgetTool } from './components/widget-tool';

// const WidgetToolContainer = connect(
//   ({ widgets, editWidgetId }) => ({ widgets, editWidgetId }),
//   dispatch => bindActionCreators({
//     insertWidget,
//     replaceWidget,
//     deleteWidget,
//     editWidget: widgetActionCreators.editWidgetActionCreator,
//     cancelWidget: widgetActionCreators.cancelWidgetActionCreator,
//     refreshWidgets,
//   }, dispatch))(WidgetTool);

// ReactDOM.render(<Provider store={appStore}>
//   <WidgetToolContainer />
// </Provider>, document.querySelector('main'));

class Person {

  static propTypes = {
    name: String
  }

  static doIt() {

  }

  constructor() {

  }

}

function Person2() {

}

Person2.propTypes = {
  name: String
};

const Person3 = () => {
  
};
  
Person3.propTypes = {
  name: String
};

console.dir(Person);
console.dir(Person2);
console.dir(Person3);