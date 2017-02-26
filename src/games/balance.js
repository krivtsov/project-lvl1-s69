import { randomNumber, gameGo } from '..';

const ruleGcdGame = 'Balance the given number.';

const questionGcdGame = () => randomNumber(100, 9999);

const balanceNumber = (arrayNum) => {
  const maxValue = Math.max.apply(null, arrayNum);
  const minValue = Math.min.apply(null, arrayNum);
  const newArrayNum = arrayNum;
  const maxValueIndex = arrayNum.indexOf(maxValue);
  const minValueIndex = arrayNum.indexOf(minValue);

  if (maxValue - minValue > 1) {
    newArrayNum[maxValueIndex] = maxValue - 1;
    newArrayNum[minValueIndex] = minValue + 1;
    return balanceNumber(newArrayNum);
  }
  return arrayNum.sort();
};

const correctAnswer = (expression) => {
  const arrayExp = `${expression}`.split('').map(value => parseInt(value, 10));
  return Number(balanceNumber(arrayExp).join(''));
};


const exp = () => [questionGcdGame, correctAnswer];

export default () => gameGo(ruleGcdGame, exp);
