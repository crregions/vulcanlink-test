const fs = require('fs')

const AggregatorFake = artifacts.require('AggregatorFake')

module.exports = async function (deployer, network) {
  if (network === 'development') {
    await deployer.deploy(AggregatorFake)
    const aggregatorFakeAddr = AggregatorFake.address

    await fs.promises.writeFile(
      'test_artifacts.env',
      `AGGREGATOR_FAKE_ADDR=${aggregatorFakeAddr}`
    )
  }
}
