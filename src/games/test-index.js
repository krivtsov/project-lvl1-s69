#!/usr/bin/env node

import { randomNumber } from '..';

export const ruleTestGame = () => {
  console.log('It\'s a simple game, enter the number.\n');
};

export const questionTest = () => randomNumber();

export const correctAnswer = num => num;
