#!/usr/bin/env node

import { welcome, yourName, ruleEvenGame, iterEvenGame, sayHello, questionValueEvenGame } from '.';


export default () => {
  welcome();
  ruleEvenGame();
  const name = yourName();
  sayHello(name);
  iterEvenGame(name, 0, questionValueEvenGame());
};
