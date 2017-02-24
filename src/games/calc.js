import { cons, car, cdr } from 'hexlet-pairs';
import { gameGo, randomPair } from '..';

const ruleCalcGame = () => {
  console.log('What is the result of the expression?\n');
};

const randomOperator = () => {
  const number = (Math.floor(Math.random() * 3) + 1);
  return number;
};


const printRandomOperator = (number) => {
  let print = '';
  switch (number) {
    case 1: print = '+';
      break;
    case 2: print = '-';
      break;
    case 3: print = '*';
      break;
    default: print = '+';
  }
  return print;
};


const questionCalc = () => {
  const pair = randomPair();
  const operator = randomOperator();
  const question = `${car(pair)} ${printRandomOperator(operator)} ${cdr(pair)}`;
  return question;
};

const calculation = (expression) => {
  const pairExp = cons(Number(expression[0]), Number(expression[4]));
  let result = 0;
  switch (expression[2]) {
    case '+': result = car(pairExp) + cdr(pairExp);
      break;
    case '-': result = car(pairExp) - cdr(pairExp);
      break;
    case '*': result = car(pairExp) * cdr(pairExp);
      break;
    default: result = car(pairExp) + cdr(pairExp);
  }
  return result;
};


export default () => {
  gameGo(ruleCalcGame, questionCalc, calculation);
};
