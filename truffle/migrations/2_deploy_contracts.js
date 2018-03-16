var Migrations = artifacts.require("Migrations");

var Ownable = artifacts.require("./zeppelin/ownership/Ownable.sol");
var Killable = artifacts.require("./zeppelin/lifecycle/Killable.sol");
var Authentication = artifacts.require("./Authentication.sol");
var BlitzCrowdsale = artifacts.require("BlitzCrowdsale");
var BlitzCrowdsaleToken = artifacts.require("BlitzCrowdsaleToken");

var SafeMath = artifacts.require("./zeppelin/math/SafeMath.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Migrations);
  //deployer.deploy(Ownable);
  //deployer.link(Ownable, Killable);
  //deployer.deploy(Killable);
  //deployer.link(Killable, Authentication);
  //deployer.deploy(Authentication);
  //deployer.autolink(();
  //deployer.deploy(SafeMath);

  return liveDeploy(deployer, accounts);
};

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
async function liveDeploy(deployer, accounts) {
  const BigNumber = web3.BigNumber;

  const RATE = 1;
  const startTime = latestTime() + duration.minutes(1);
  const endTime = startTime + duration.weeks(1);
  const CAP = 10000;
  console.log([startTime, endTime, RATE, accounts[0]]);
  return deployer.deploy(BlitzCrowdsaleToken).then(() =>
    deployer
      .deploy(
        BlitzCrowdsale,
        startTime,
        endTime,
        RATE,
        accounts[0],
        CAP,
        BlitzCrowdsaleToken.address,
        10000
      )
      .then(() => {
        console.log("BlitzCrowdsale Address", BlitzCrowdsale);
      })
  );

  // uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet)
}
