import { cons, car, cdr, toString } from 'hexlet-pairs';
import { randomPair, gameGo } from '..';

const ruleGcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.\n');
};

const questionGcdGame = () => {
  const pair = randomPair();
  const question = `${car(pair)} ${cdr(pair)}`;
  return question;
};

const correctAnswer = (expression) => {
  const pairExp = cons(Number(expression[0]), Number(expression[3]));
  console.log(toString(pairExp));
  const gcd = (pair) => {
    if (cdr(pair) === 0) {
      return car(pair);
    }
    return gcd(cons(cdr(pair), car(pair) % cdr(pair)));
  };
  gcd(pairExp);
};
export default () => {
  gameGo(ruleGcdGame, questionGcdGame, correctAnswer);
};
