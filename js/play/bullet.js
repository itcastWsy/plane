class bullet {
  constructor(x, y) {
    this.img = imgs["bullet"];
    this.width = 20;
    this.height = 20;
    this.x = x-this.width/2;
    this.y = y;
    this.top = 0;
    this.render();
  }
  render() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height); 
  } 
  update() { 
    this.top++;
    this.y=this.y-this.top;
    this.render();
  }
}
export default bullet;