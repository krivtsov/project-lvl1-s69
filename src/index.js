#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const yourName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const yourAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const randomNumber = () => {
  const number = (Math.floor(Math.random() * 9) + 1);
  return number;
};
