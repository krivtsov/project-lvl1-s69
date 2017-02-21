#!/usr/bin/env node

import { welcome, yourName, sayHello } from '../';

const brainGames = () => {
  welcome();
  sayHello(yourName());
};

brainGames();
