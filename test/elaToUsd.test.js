const BN = require('bn.js')

const ElaToUsd = artifacts.require('ElaToUsd')

contract('ElaToUsd', (accounts, network) => {

  let elaToUsdInstance

  before(async () => {
    elaToUsdInstance = await ElaToUsd.deployed()
  })


  // smart contract variables are always initialized to 0
  it('Should verify that the initial value is 0', async () => {
    const result = await storageInstance.retrieve()

    assert(new BN(0).eq(result))
  })

  it('Should store and verify number', async () => {
    await storageInstance.store(5)
    const result = await storageInstance.retrieve()

    assert(new BN(5).eq(result))
  })
})
