import Bgc from "./background/bgc";
import Hero from "./play/hero";
import Music from "./background/music";
class databus {
  constructor() {
    this.hero = null;
    this.bgc = null;
    this.music=null;
  }
  init() {
    this.bgc = new Bgc();
    this.hero = new Hero();
    this.music=new Music();
  }

  update() {
    this.bgc.update();
    this.hero.update();
  }
}

export default databus