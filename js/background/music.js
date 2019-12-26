class music {
  constructor() {
    this.bgc = wx.createInnerAudioContext();
    this.bgc.src = "./audio/bgm.mp3";
    this.bgc.play();
  }
}

export default music;