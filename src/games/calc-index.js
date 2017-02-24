#!/usr/bin/env node

import { cons, car, cdr } from 'hexlet-pairs';
import { randomNumber } from '..';

export const ruleCalcGame = () => {
  console.log('What is the result of the expression?\n');
};

export const randomOperator = () => {
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

export const calculation = (pair, number) => {
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

export const randomPair = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const pair = cons(num1, num2);
  return pair;
};

export const questionCalc = (value, operator) => {
  const question = `${car(value)} ${printRandomOperator(operator)} ${cdr(value)}`;
  return question;
};
