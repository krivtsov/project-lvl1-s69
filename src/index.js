#!/usr/bin/env node

import readlineSync from 'readline-sync';

const yourName  = () => {
    console.log(`Welcome to the Brain Games III !`);
    const name = readlineSync.question(`May I have your name? `);
    console.log(`Hello ${name}!`);
};

export default yourName;

