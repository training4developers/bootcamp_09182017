import '../scss/styles.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class PersonProfile extends React.Component {
  render() {
    // return React.createElement('h1', null, 'Person Profile');
    return <div>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
      <div>e</div>
      <div>f</div>
    </div>;
  }
}

ReactDOM.render(
  <PersonProfile />,
  document.querySelector('main')
);


