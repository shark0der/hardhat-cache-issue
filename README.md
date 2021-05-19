## hardhat cache issue

Steps to reproduce:

```
npm i

# the first one will fail, the second will work:
rm -rf artifacts cache; npm test; npm test

```
