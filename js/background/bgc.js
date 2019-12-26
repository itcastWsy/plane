class bg {
  constructor() {
    this.img = imgs["bg"];
    this.top = 0;
    this.render();
  }
  render() {
    ctx.drawImage(this.img, 0, this.top, width, height);
    ctx.drawImage(this.img, 0, -height + this.top, width, height);
  }
  update() {
    this.top++;
    if (this.top === height) {
      this.top = 0;
    }
    this.render();
  }
}
export default bg;