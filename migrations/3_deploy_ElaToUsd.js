const fs = require('fs')

const ElaToUsd = artifacts.require('ElaToUsd')

module.exports = async function (deployer, network) {
  let aggregatorAddr

  await deployer.deploy(ElaToUsd)

  const elaToUsdInstance = await ElaToUsd.deployed()

  if (network === 'development') {
    const aggregatorFakeAddrRaw = await fs.promises.readFile(
      'test_artifacts.env'
    )
    aggregatorAddr = aggregatorFakeAddrRaw.toString().split('=')[1]
  } else {
    // this is the already known deployed Aggregator contract on testnet
    aggregatorAddr = '0xA64267e44af675498310620418c8F08A9dAeB1eb'
  }

  console.log(`aggregatorAddr = ${aggregatorAddr}`)

  await elaToUsdInstance.initialize(aggregatorAddr)
}
