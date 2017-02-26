import { range } from 'lodash';
import { randomNumber, gameGo } from '..';

const ruleProgressGame = 'What number is missing in this progression?';

const numberStart = randomNumber(1, 50);
const step = randomNumber(1, 9);
const endRange = numberStart + (step * 10);
const guessIndex = randomNumber(0, 9);

const progressGame = () => {
  const progressionConst = range(numberStart, endRange, step);
  const guessNumber = progressionConst[guessIndex];
  const progression = progressionConst;
  progression[guessIndex] = '..';
  const questionProgressGame = progression.join(' ');
  return [questionProgressGame, guessNumber];
};

const [a, b] = progressGame();

const questionProgressGame = () => a;

const correctAnswer = () => b;


export default () => {
  gameGo(ruleProgressGame, questionProgressGame, correctAnswer);
};
