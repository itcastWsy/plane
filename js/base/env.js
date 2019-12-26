window.canvas = wx.createCanvas()
window.ctx = canvas.getContext('2d');
window.width = wx.getSystemInfoSync().screenWidth;
window.height = wx.getSystemInfoSync().screenHeight;
window.imgs = [];
class env {
  init() {
    return new Promise((r, j) => {
      [
        "./images/bg.jpg",
        "./images/bullet.png",
        "./images/Common.png",
        "./images/enemy.png",
        "./images/explosion1.png",
        "./images/explosion10.png",
        "./images/explosion11.png",
        "./images/explosion12.png",
        "./images/explosion13.png",
        "./images/explosion14.png",
        "./images/explosion15.png",
        "./images/explosion16.png",
        "./images/explosion17.png",
        "./images/explosion18.png",
        "./images/explosion19.png",
        "./images/explosion2.png",
        "./images/explosion3.png",
        "./images/explosion4.png",
        "./images/explosion5.png",
        "./images/explosion6.png",
        "./images/explosion7.png",
        "./images/explosion8.png",
        "./images/explosion9.png",
        "./images/hero.png"
      ]
        .forEach((v, i, arr) => {
          const img = wx.createImage();
          img.src = v;
          window.imgs[v.match(/(\w+)\.[jpg|png|gif|jpeg|webp]+/)[1]] = img;
          img.onload = () => {
            if (i === arr.length - 1) {
              r();
            }
          }
        })
    })
  }
}
export default env;