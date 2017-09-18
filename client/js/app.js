import '../scss/styles.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class PersonProfile extends React.Component {
  render() {
    // return React.createElement('h1', null, 'Person Profile');
    return <div>
      <h1 className="page-title">Person Profile</h1>
      <ul>
        <li className="critical">Teja was a billionaire by age 5.</li>
        <li>Lucy climbed Mt. Everest by age 10.</li>
        <li>Nika swam across the ocean at age 6.</li>
      </ul>
      <h1 className="page-title">Person Profile</h1>
      <ul>
        <li className="critical">Teja was a billionaire by age 5.</li>
        <li>Lucy climbed Mt. Everest by age 10.</li>
        <li>Nika swam across the ocean at age 6.</li>
      </ul>
      <p>In 2015, Tristan sailed the ocean blue.</p>
    </div>;
  }
}

ReactDOM.render(
  <PersonProfile />,
  document.querySelector('main')
);