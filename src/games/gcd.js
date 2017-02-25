import { car, cdr } from 'hexlet-pairs';
import { randomPair, gameGo } from '..';

const ruleGcdGame = 'Find the greatest common divisor of given numbers.\n';

const questionGcdGame = () => {
  const pair = randomPair();
  const question = `${car(pair)} ${cdr(pair)}`;
  return question;
};

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const correctAnswer = (expression) => {
  const pairExp = expression.split(' ');
  const number1 = Number(pairExp[0]);
  const number2 = Number(pairExp[1]);
  return gcd(number1, number2);
};

export default () => {
  gameGo(ruleGcdGame, questionGcdGame, correctAnswer);
};
