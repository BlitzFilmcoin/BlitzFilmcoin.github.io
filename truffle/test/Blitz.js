var Blitz = artifacts.require("./blitz.sol");

contract("Blitz", function(accounts) {
  it("...should buy the value 100.", function() {
    return Blitz.deployed()
      .then(function(instance) {
        blitzInstance = instance;

        return blitzInstance.buyToken( { value: 100, from: accounts[0] });
      })
      .then(function() {
        return blitzInstance.balanceOf(accounts[0]);
      })
      .then(function(storedData) {
        assert.equal(storedData, 100, "The value 100 was not bought.");
        return blitzInstance.balanceOf(accounts[0]);
      });
      
  });
});


