import iconPaper from "../assets/img/icon-paper.svg";
import iconScissors from "../assets/img/icon-scissors.svg";
import iconRock from "../assets/img/icon-rock.svg";

export const resultGame = new Map([
  [1, "You win"],
  [2, "You lose"],
  [3, "Draw"]
]); 
export default [
  {
    id: 0,
    name: "Paper",
    color: "#4B6AF1",
    icon: iconPaper,
    win: [2],
  },
  {
    id: 1,
    name: "Scissors",
    color: "#ECA520",
    icon: iconScissors,
    win: [0],
  },
  {
    id: 2,
    name: "Rock",
    color: "#DC3C56",
    icon: iconRock,
    win: [1],
  },
];
