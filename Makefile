install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

startEven:
	npm run babel-node -- src/bin/brain-even.js

startCalc:
	npm run babel-node -- src/bin/brain-calc.js

publish:
	npm publish

build:
	npm run build

make lint:
	npm run eslint -- src
