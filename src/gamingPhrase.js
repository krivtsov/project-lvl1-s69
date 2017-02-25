export const welcome = (rules) => {
  console.log(`Welcome to the Brain Games III !\n${rules}`);
};

export const sayHello = (name) => {
  console.log(`Hello ${name}!\n`);
};

export const askQuestion = (value) => {
  console.log(`Question: ${value}`);
};

export const youAnswerCorrect = () => {
  console.log('Correct!');
};

export const youAnswerError = (answer, result, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
};
export const youWin = (name) => {
  console.log(`\nCongratulations, ${name}!`);
};
