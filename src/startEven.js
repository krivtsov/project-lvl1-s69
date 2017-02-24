#!/usr/bin/env node

import { welcome, sayHello, askQuestion, answerCorrect, answerError, youWin } from './gamingPhrase';
import { ruleEvenGame, questionEvenGame, correctAnswer } from './games/even-index';
import { yourName, yourAnswer } from '.';

const iter = (name, numberWin) => {
  if (numberWin === 3) {
    return youWin(name);
  }
  const question = questionEvenGame();
  askQuestion(question);
  const answer = yourAnswer();
  const result = correctAnswer(question);
  if (answer === result) {
    answerCorrect();
  } else {
    return answerError(answer, result, name);
  }
  return iter(name, numberWin + 1);
};


const testGame = () => {
  welcome();
  ruleEvenGame();
  const name = yourName();
  sayHello(name);
  iter(name, 0);
};


export default testGame;
