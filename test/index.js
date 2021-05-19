const { artifacts } = require('hardhat');
const { expectRevert } = require('@openzeppelin/test-helpers');

describe('Failure', async function () {

  it('fails only on the first run', async function () {

    const Failure = artifacts.require('Failure');
    const failure = await Failure.new();

    await expectRevert.assertion(
      failure.fail(),
    );
  });

});
