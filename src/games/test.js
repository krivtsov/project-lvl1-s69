import { randomNumber, gameGo } from '..';

const ruleTestGame = 'It\'s a simple game, !!!!! enter the number';

const questionTest = () => randomNumber(1, 999);

const correctAnswer = num => Number(num);

export default () => {
  gameGo(ruleTestGame, questionTest, correctAnswer);
};
