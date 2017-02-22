import { welcome, yourName, ruleEvenGame, iterEvenGame, sayHello } from '.';


export default () => {
  welcome();
  ruleEvenGame();
  const name = yourName();
  sayHello(name);
  iterEvenGame(name, 0);
};
