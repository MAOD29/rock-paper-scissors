import options from "../utils/constant.js";
import store from "../storage/index.js";

const addScore = () => {
  store.dispatch("addScore");
};
export const opponentOption = () => {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

export const getResultGame = (youPicked, opponentPicked) => {
  if (youPicked.id === opponentPicked.id) {
    return 2;
  }
  if (youPicked.win.includes(opponentPicked.id)) {
    addScore();
    return 1;
  }
  return 2;
};
