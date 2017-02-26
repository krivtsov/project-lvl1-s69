
import { randomNumber, gameGo } from '..';

const rulePrimeGame = 'Answer "yes" if number prime otherwise answer "no".';

const findDivisor = (number, test) => {
  if (test ** 2 > number) {
    return number;
  } if (number % test === 0) {
    return test;
  }
  return findDivisor(number, test + 1);
};

const isPrime = (num) => {
  if (num === findDivisor(num, 2)) {
    return 'yes';
  }
  return 'no';
};


const questionPrimeGame = () => randomNumber(1, 999);

const correctAnswer = num => isPrime(num);


const exp = () => [questionPrimeGame, correctAnswer];

export default () => gameGo(rulePrimeGame, exp);
