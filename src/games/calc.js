import { cons, car, cdr } from 'hexlet-pairs';
import { gameGo, randomNumber, randomPair } from '..';

const ruleCalcGame = () => {
  console.log('What is the result of the expression?\n');
};

const randomOperator = () => randomNumber(1, 3);
// {
//   const number = (Math.floor(Math.random() * 3) + 1);
//   return number;
// };


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
  const pairExp = expression.split(' ');
  const operand = pairExp[1];
  const num1 = Number(pairExp[0]);
  const num2 = Number(pairExp[2]);
  let result = 0;
  switch (operand) {
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*': result = num1 * num2;
      break;
    default: result = num1 + num2;
  }
  return result;
};


export default () => {
  gameGo(ruleCalcGame, questionCalc, calculation);
};
