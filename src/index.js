#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games III !');
};

export const yourName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const ruleEvenGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
};

export const yourAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
