var Ownable = artifacts.require("./zeppelin/ownership/Ownable.sol");
var Killable = artifacts.require("./zeppelin/lifecycle/Killable.sol");
var Authentication = artifacts.require("./Authentication.sol");
var Blitz = artifacts.require("./Blitz.sol");
var SafeMath = artifacts.require("./zeppelin/math/SafeMath.sol");


module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.link(Ownable, Killable);
  deployer.deploy(Killable);
  deployer.link(Killable, Authentication);
  deployer.deploy(Authentication);
  //deployer.autolink();
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, Blitz);
  deployer.deploy(Blitz);

};
