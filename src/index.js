#!/usr/bin/env node

import readlineSync from 'readline-sync';

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

export const ruleCalsGame = () => {
  console.log('What is the result of the expression?');
};

export const yourAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const iterEvenGame = (name, acc) => {
  let result = 0;
  if (acc === 3) {
    return console.log(`\nCongratulations, ${name}!\n`);
  }
  const number = (Math.floor(Math.random() * 27) + 1);
  console.log(`Question: ${number}`);
  const checkEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const answer = yourAnswer();
  if (answer === checkEven(number)) {
    result = acc + 1;
    console.log('Correct!');
  } else {
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkEven(number)}'.\nLet's try again, ${name}!`);
  }
  return iterEvenGame(name, result);
};
