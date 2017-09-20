export class Colors {

  constructor(colorList) {
    this._colors = colorList;
  }

  get sortedColors() {
    return this._colors.sort( (a,b) => a.sortOrder - b.sortOrder );
  }

  addColor(color) {
    color.id = Math.max(...this._colors.map(c => c.id)) + 1;
    this._colors = this._colors.concat(color);
  }
}
