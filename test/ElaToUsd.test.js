// const BN = require('bn.js')

const ElaToUsd = artifacts.require('ElaToUsd')

contract('ElaToUsd', (accounts) => {

  let elaToUsdInstance

  before(async () => {
    elaToUsdInstance = await ElaToUsd.deployed()
  })

  it('Should return the fake result 221000000 in dev or print the ELA price on testnet', async () => {

    const result = await elaToUsdInstance.calcUsd(1)

    console.log(result)

    if (process.env.NODE_ENV === 'development'){
      expect(result.toString()).to.be.equal('221000000')
    } else if (process.env.NODE_ENV === 'testnet'){
      console.log('TESTNET returned ELA Price: ' + (result.toNumber() / 100000000))
    }
  })
})
