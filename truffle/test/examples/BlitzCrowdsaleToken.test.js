const SolidityEvent = require('web3/lib/web3/event.js');

function decodeLogs (logs, contract, address) {
  return logs.map(log => {
    const event = new SolidityEvent(null, contract.events[log.topics[0]], address);
    return event.decode(log);
  });
}


const BlitzCrowdsaleToken = artifacts.require('BlitzCrowdsaleToken');

contract('BlitzCrowdsaleToken', accounts => {
  let token;
  const creator = accounts[0];

  beforeEach(async function () {
    token = await BlitzCrowdsaleToken.new({ from: creator });
  });

  it('has a name', async function () {
    const name = await token.name();
    assert.equal(name, 'BlitzCrowdsaleToken');
  });

  it('has a symbol', async function () {
    const symbol = await token.symbol();
    assert.equal(symbol, 'SIM');
  });

  it('has 18 decimals', async function () {
    const decimals = await token.decimals();
    assert(decimals.eq(18));
  });

  it('assigns the initial total supply to the creator', async function () {
    const totalSupply = await token.totalSupply();
    const creatorBalance = await token.balanceOf(creator);

    assert(creatorBalance.eq(totalSupply));

    const receipt = web3.eth.getTransactionReceipt(token.transactionHash);
    const logs = decodeLogs(receipt.logs, BlitzCrowdsaleToken, token.address);
    assert.equal(logs.length, 1);
    assert.equal(logs[0].event, 'Transfer');
    assert.equal(logs[0].args.from.valueOf(), 0x0);
    assert.equal(logs[0].args.to.valueOf(), creator);
    assert(logs[0].args.value.eq(totalSupply));
  });
});
