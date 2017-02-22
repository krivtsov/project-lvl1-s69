#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';


export const welcome = () => {
  console.log('Welcome to the Brain Games III !');
};

export const yourName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const sayHello = (name) => {
  console.log(`Hello ${name}!\n`);
};

export const ruleEvenGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
};

export const ruleCalcGame = () => {
  console.log('What is the result of the expression?\n');
};

export const yourAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const question = (value) => {
  console.log(`Question: ${value}`);
};

export const answerCorrect = () => {
  console.log('Correct!');
};

export const answerError = (answer, result, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
};
export const youWin = (name) => {
  console.log(`\nCongratulations, ${name}!\n`);
};

export const randomNumber = () => {
  const number = (Math.floor(Math.random() * 9) + 1);
  return number;
};

export const randomOperator = () => {
  const number = (Math.floor(Math.random() * 3) + 1);
  return number;
};

export const printRandomOperator = (number) => {
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

export const checkEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const questionValueEvenGame = () => {
  const number = randomNumber();
  return number;
};

export const randomPair = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const pair = cons(num1, num2);
  return pair;
};

export const iterEvenGame = (name, numberWin, value) => {
  if (numberWin === 3) {
    return youWin(name);
  }
  question(value);

  const answer = yourAnswer();
  const result = checkEven(value);
  if (answer === result) {
    answerCorrect();
  } else {
    return answerError(answer, result, name);
  }
  return iterEvenGame(name, numberWin + 1, questionValueEvenGame());
};


export const iterCalcGame = (name, numberWin, value) => {
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
