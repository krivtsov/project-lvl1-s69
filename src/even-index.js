#!/usr/bin/env node

import { welcome, sayHello, youWin, question, answerCorrect, answerError } from './gamingPhrase';
import { randomNumber, yourName, yourAnswer } from '.';

const ruleEvenGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
};

const checkEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const questionValueEvenGame = () => {
  const number = randomNumber();
  return number;
};

const iterEvenGame = (name, numberWin, value) => {
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

export default () => {
  welcome();
  ruleEvenGame();
  const name = yourName();
  sayHello(name);
  iterEvenGame(name, 0, questionValueEvenGame());
};
