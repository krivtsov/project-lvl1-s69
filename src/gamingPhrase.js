#!/usr/bin/env node

export const welcome = () => {
  console.log('Welcome to the Brain Games III !');
};

export const sayHello = (name) => {
  console.log(`Hello ${name}!\n`);
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
