export class Colors {

  constructor(colors) {
    this._colors = colors;
  }

  get sortedColors() {
    return this._colors.concat().sort( (a,b) => a.sortOrder - b.sortOrder );
  }

  addColor(color) {
    color.id = Math.max(...this._colors.map(c => c.id)) + 1;
    this._colors = this._colors.concat(color);
    return this;
  }

}