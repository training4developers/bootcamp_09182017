import * as React from 'react';

export class ToolHeader extends React.Component {

  render() {

    return <header>
      {this.props.children}
    </header>;
  }
}