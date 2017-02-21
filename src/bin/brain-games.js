#!/usr/bin/env node

import { welcome, yourName } from '../';

const brainGames = () => {
  welcome();
  const name = yourName();
  console.log(`Hello ${name}!\n`);
};

brainGames();
