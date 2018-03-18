var Migrations = artifacts.require("Migrations");

var BlitzCrowdsale = artifacts.require("BlitzCrowdsale");
var BlitzCrowdsaleToken = artifacts.require("BlitzCrowdsaleToken");
var RefundVault = artifacts.require("RefundVault");


module.exports = function(deployer, network, accounts) {
  deployer.deploy(Migrations);
  //deployer.deploy(Ownable);
  //deployer.link(Ownable, Killable);
  //deployer.deploy(Killable);
  //deployer.link(Killable, Authentication);
  //deployer.deploy(Authentication);
  //deployer.autolink(();
  //deployer.deploy(SafeMath);

  return deployBlitzToken(deployer, accounts);
};

function ether (n) {
  return new web3.BigNumber(web3.toWei(n, 'ether'));
}

const duration = {
  seconds: function(val) {
    return val;
  },
  minutes: function(val) {
    return val * this.seconds(60);
  },
  hours: function(val) {
    return val * this.minutes(60);
  },
  days: function(val) {
    return val * this.hours(24);
  },
  weeks: function(val) {
    return val * this.days(7);
  },
  years: function(val) {
    return val * this.days(365);
  }
};
function latestTime() {
  return web3.eth.getBlock("latest").timestamp;
}

const RATE = new web3.BigNumber(1);
const GOAL = ether(10);
const CAP = ether(20);
const openingTime = latestTime() + duration.seconds(10);
const closingTime = openingTime + duration.weeks(1);
const afterClosingTime = closingTime + duration.seconds(1);

async function deployBlitzToken(deployer, accounts) {
  const owner = accounts[0]
  const wallet = accounts[0]

  let token = await BlitzCrowdsaleToken.new({ from: owner });
  let vault = await RefundVault.new(wallet, { from: owner });

  let crowdsale = await BlitzCrowdsale.new(
    openingTime, closingTime, RATE, wallet, CAP, token.address, GOAL
  );
  console.log('====================================');
  console.log("The address " + crowdsale.address);
  console.log('====================================');
  await token.transferOwnership(crowdsale.address);
  await vault.transferOwnership(crowdsale.address);
  const openingTime2 = await crowdsale.openingTime();
  const closingTime2 = await crowdsale.closingTime();
  const rate2 = await crowdsale.rate();
  const walletAddress2 = await crowdsale.wallet();
  const goal2 = await crowdsale.goal();
  const cap2 = await crowdsale.cap();
  

  console.log("cap " + cap2);
  console.log("goal " + goal2);
  console.log("walletAddress " + walletAddress2);  
  console.log("rate " + rate2);
  console.log("closingTime " + closingTime2);
  console.log("openingTime " + openingTime2);
}

