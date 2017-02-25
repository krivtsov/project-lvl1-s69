import { randomNumber, gameGo } from '..';

const ruleEvenGame = 'Answer "yes" if number even otherwise answer "no".';

const questionEvenGame = () => randomNumber(1, 999);

const correctAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  gameGo(ruleEvenGame, questionEvenGame, correctAnswer);
};
