import { randomNumber, gameGo } from '..';

const ruleTestGame = () => {
  console.log('It\'s a simple game, !!!!! enter the number.\n');
};

const questionTest = () => randomNumber(1, 999);

const correctAnswer = num => Number(num);

export default () => {
  gameGo(ruleTestGame, questionTest, correctAnswer);
};
