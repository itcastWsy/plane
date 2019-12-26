import Bullet from "./bullet";
class hero {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.img = imgs["hero"];
    this.x = (width - this.width) / 2;
    this.y = (height - this.height);
    this.bulltes = [];
    this.times = 0;
    this.render();
    this.addEventMove(); 
    this.createBullets();
  }
  render() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  addEventMove() {
    canvas.addEventListener("touchmove", (e) => {
      const { clientX, clientY } = e.changedTouches[0];
      this.x = clientX - this.width / 2;
      this.y = clientY - this.height / 2;
      this.render();
    })
  }
  update() {
    this.render();
    this.createBullets();
    this.shoot();

  }
  createBullets() {
    this.times++;
    if (this.times % 30 === 0) {
      this.bulltes.push(new Bullet(this.x + this.width / 2, this.y));
      this.times = 0;
    }
  }
  shoot() {
    this.bulltes.forEach(v => {
      v.update();
    })
  }
}
export default hero;