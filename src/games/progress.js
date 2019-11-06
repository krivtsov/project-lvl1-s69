import { range } from 'lodash';
import { randomNumber, gameGo } from '..';

const ruleProgressGame = 'What number is missing in this progression?';

const numberStart = randomNumber(1, 50);
const step = randomNumber(1, 9);
const endRange = numberStart + (step * 10);
const guessIndex = randomNumber(0, 9);
const progressionConst = range(numberStart, endRange, step);

// const progressGame = (arr, num) => {
// const guessNumber = () => arr[num];
// const progression = [arr.slice(0, num), '..', arr.slice(num + 1)].join(' ');
// const questionProgressGame = () => progression;
// return [questionProgressGame, guessNumber];

const progressGame = () => {
  const guessNumber = () => progressionConst[guessIndex];
  const progression = [progressionConst.slice(0, guessIndex), '..', progressionConst.slice(guessIndex + 1)].join(' ');
  const questionProgressGame = () => progression;
  return [questionProgressGame, guessNumber];
};

// const exp = () => {
//   progressGame(progressionConst, guessIndex);
// };
// не до делал чтобы вызвать функция со значениями.

export default () => gameGo(ruleProgressGame, progressGame);
