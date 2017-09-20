export class Color {

  constructor(colorData) {
    Object.assign(this, colorData);
  }

  colorInfo() {
    return this.name + ' ' + this.hexCode;
  }
}