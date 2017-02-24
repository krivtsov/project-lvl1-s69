#!/usr/bin/env node

import { randomNumber } from '..';

export const ruleEvenGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
};

export const questionEvenGame = () => randomNumber();

export const correctAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
