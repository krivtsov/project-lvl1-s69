#!/usr/bin/env node

import { welcome, yourName, ruleEvenGame, yourAnswer, sayHello } from '../';


const gameEven = () => {
  welcome();
  ruleEvenGame();
  const name = yourName();
  sayHello(name);
  const iter = (acc) => {
    let result = 0;
    if (acc === 3) {
      return console.log(`\nCongratulations, ${name}!\n`);
    }
    const number = (Math.floor(Math.random() * 10) + 1);
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
    return iter(result);
  };
  return iter(0);
};
gameEven();
