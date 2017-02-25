import { cons } from 'hexlet-pairs';
import readlineSync from 'readline-sync';
import { welcome, sayHello, askQuestion, youAnswerCorrect, youAnswerError, youWin } from './gamingPhrase';

export const yourName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const yourAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const randomNumber = (min, max) => {
  const number = (Math.floor(Math.random() * (max - min)) + min);
  return number;
};

export const randomPair = () => {
  const num1 = randomNumber(1, 29);
  const num2 = randomNumber(1, 29);
  const pair = cons(num1, num2);
  return pair;
};


export const gameGo = (ruleGame, question, corAnswer) => {
  welcome(ruleGame);
  const name = yourName();
  sayHello(name);
  const iter = (numberWin) => {
    if (numberWin === 3) {
      return youWin(name);
    }
    const quest = question();
    askQuestion(quest);
    const answer = yourAnswer();
    const result = `${corAnswer(quest)}`;
    if (answer === result) {
      youAnswerCorrect();
    } else {
      return youAnswerError(answer, result, name);
    }
    return iter(numberWin + 1);
  };
  iter(0);
};
