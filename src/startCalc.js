#!/usr/bin/env node

import { welcome, sayHello, askQuestion, answerCorrect, answerError, youWin } from './gamingPhrase';
import { ruleCalcGame, questionCalc, randomOperator, calculation, randomPair } from './games/calc-index';
import { yourName, yourAnswer } from '.';

const iter = (name, numberWin, valueQuestion) => {
  if (numberWin === 3) {
    return youWin(name);
  }
  const operator = randomOperator();
  askQuestion(questionCalc(valueQuestion, operator));
  const answer = parseInt(yourAnswer(), 10);
  const result = calculation(valueQuestion, operator);
  if (answer === result) {
    answerCorrect();
  } else {
    return answerError(answer, result, name);
  }
  return iter(name, numberWin + 1, randomPair());
};


const calcGame = () => {
  welcome();
  ruleCalcGame();
  const name = yourName();
  sayHello(name);
  iter(name, 0, randomPair());
};


export default calcGame;
