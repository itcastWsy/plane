import Env from "./js/base/env";
import Databus from "./js/databus";

const env = new Env();


main();
async function main() {
  await env.init();
  const databus = new Databus();
  databus.init();
  loop();

  function loop() {
    ctx.clearRect(0, 0, width, height);
    databus.update();
    requestAnimationFrame(loop);
  }
}
