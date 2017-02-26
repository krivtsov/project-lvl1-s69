import { randomNumber, gameGo } from '..';

const ruleEvenGame = 'Answer "yes" if number prime otherwise answer "no".';

const questionEvenGame = () => randomNumber(1, 999);

const isNum = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const correctAnswer = num => isNum(num);

const exp = () => [questionEvenGame, correctAnswer];

export default () => gameGo(ruleEvenGame, exp);
