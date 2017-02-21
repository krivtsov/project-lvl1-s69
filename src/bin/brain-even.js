#!/usr/bin/env node

import { welcome, yourName, ruleEvenGame, iterEvenGame, sayHello } from '../';


const gameEven = () => {
  welcome();
  ruleEvenGame();
  const name = yourName();
  sayHello(name);
  iterEvenGame(name, 0);
};

gameEven();
