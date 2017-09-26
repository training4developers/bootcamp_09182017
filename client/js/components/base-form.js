import * as React from 'react';

export class BaseForm extends React.Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value
    });
  }
}