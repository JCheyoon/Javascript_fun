"use strict";
import PopUP from "./popup.js";
import Game, { GameBuilder } from "./game.js";

const gameFinishBanner = new PopUP();
const game = new GameBuilder()
  .withGameDuration(60)
  .withCarrotCount(15)
  .withBugCount(15)
  .build();

game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch (reason) {
    case "cancel":
      message = "Replay❓";
      break;
    case "win":
      message = "You won🎉";
      break;
    case "lose":
      message = "You lost💩";
      break;
    default:
      throw new Error("not valid");
  }
  gameFinishBanner.show(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
}); //popup이 클릭이되면,startgame호출해
