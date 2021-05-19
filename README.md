## hardhat cache issue

Steps to reproduce:

```
chmod o+w . # write permission for circleci user
docker run -it -v $PWD:/app -w /app cimg/node:14.17.0 bash -c 'npm install'

# the first one will fail, the second will work:
docker run -it -v $PWD:/app -w /app cimg/node:14.17.0 bash -c 'rm -rf artifacts cache; npm test; npm test'

```
