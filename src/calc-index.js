#!/usr/bin/env node

import { welcome, yourName, ruleCalcGame, sayHello, iterCalcGame, randomPair } from '.';


export default () => {
  welcome();
  ruleCalcGame();
  const name = yourName();
  sayHello(name);
  iterCalcGame(name, 0, randomPair());
};
