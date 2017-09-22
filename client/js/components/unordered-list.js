import * as React from 'react';

export class UnorderedList extends React.Component {

  render() {
    return <section>
      <h3>{this.props.listTitle}</h3>
      <ul>{this.props.children}</ul>
    </section>;
  }

}