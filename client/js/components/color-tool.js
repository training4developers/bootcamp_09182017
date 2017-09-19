import * as React from 'react';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colorName: '',
      colorHexCode: '',
    };

    console.dir(this);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  }

  render() {
    return <div>
      <header><h1>Color Tool</h1></header>
      <ul>
        {this.props.colors.map(color => <li>{color.name}</li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="color-name-input">Color Name:</label>
          <input type="text" id="color-name-input" name="colorName"
            value={this.state.colorName} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="color-hex-code-input">Color HexCode:</label>
          <input type="text" id="color-hex-code-input" name="colorHexCode"
            value={this.state.colorHexCode} onChange={this.onChange} />
        </div>
      </form>
    </div>;

  }

}