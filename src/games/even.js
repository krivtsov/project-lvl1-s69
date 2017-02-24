import { randomNumber, gameGo } from '..';

const ruleEvenGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
};

const questionEvenGame = () => randomNumber();

const correctAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  gameGo(ruleEvenGame, questionEvenGame, correctAnswer);
};
