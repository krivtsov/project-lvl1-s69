#!/usr/bin/env node

import { cons, car, cdr } from 'hexlet-pairs';
import { welcome, sayHello, youWin, question, answerCorrect, answerError } from './gamingPhrase';
import { yourName, randomNumber, yourAnswer } from '.';

const ruleCalcGame = () => {
  console.log('What is the result of the expression?\n');
};

const randomOperator = () => {
  const number = (Math.floor(Math.random() * 3) + 1);
  return number;
};

const printRandomOperator = (number) => {
  let operator = '';
  switch (number) {
    case 1: operator = '+';
      break;
    case 2: operator = '-';
      break;
    case 3: operator = '*';
      break;
    default: operator = '+';
  }
  return operator;
};

const calculation = (pair, number) => {
  let result = 0;
  switch (number) {
    case 1: result = car(pair) + cdr(pair);
      break;
    case 2: result = car(pair) - cdr(pair);
      break;
    case 3: result = car(pair) * cdr(pair);
      break;
    default: result = car(pair) + cdr(pair);
  }
  return result;
};

const randomPair = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const pair = cons(num1, num2);
  return pair;
};

const iterCalcGame = (name, numberWin, value) => {
  if (numberWin === 3) {
    return youWin(name);
  }
  const operator = randomOperator();

  question(`${car(value)} ${printRandomOperator(operator)} ${cdr(value)}`);

  const answer = parseInt(yourAnswer(), 10);
  const result = calculation(value, operator);
  if (answer === result) {
    answerCorrect();
  } else {
    return answerError(answer, result, name);
  }
  return iterCalcGame(name, numberWin + 1, randomPair());
};

export default () => {
  welcome();
  ruleCalcGame();
  const name = yourName();
  sayHello(name);
  iterCalcGame(name, 0, randomPair());
};
