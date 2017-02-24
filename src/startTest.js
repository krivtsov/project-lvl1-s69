#!/usr/bin/env node

import { welcome, sayHello, askQuestion, answerCorrect, answerError, youWin } from './gamingPhrase';
import { ruleTestGame, questionTest, correctAnswer } from './games/test-index';
import { yourName, yourAnswer } from '.';

const iter = (name, numberWin, valueQuestion) => {
  if (numberWin === 3) {
    return youWin(name);
  }
  askQuestion(valueQuestion);
  const answer = Number(yourAnswer());
  const result = correctAnswer(valueQuestion);
  if (answer === result) {
    answerCorrect();
  } else {
    return answerError(answer, result, name);
  }
  return iter(name, numberWin + 1, questionTest());
};


const testGame = () => {
  welcome();
  ruleTestGame();
  const name = yourName();
  sayHello(name);
  iter(name, 0, questionTest());
};


export default testGame;
