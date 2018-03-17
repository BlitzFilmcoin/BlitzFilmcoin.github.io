pragma solidity ^0.4.18;

import "./zeppelin2/crowdsale/validation/CappedCrowdsale.sol";
import "./zeppelin2/crowdsale/validation/TimedCrowdsale.sol";
import "./zeppelin2/crowdsale/validation/WhitelistedCrowdsale.sol";
import "./zeppelin2/crowdsale/distribution/RefundableCrowdsale.sol";
import "./zeppelin2/crowdsale/emission/MintedCrowdsale.sol";
import "./zeppelin2/token/ERC20/MintableToken.sol";



/**
 * @title BlitzCrowdsale
 * @dev This is an example of a fully fledged crowdsale.
 * The way to add new features to a base crowdsale is by multiple inheritance.
 * In this example we are providing following extensions:
 * CappedCrowdsale - sets a max boundary for raised funds
 * RefundableCrowdsale - set a min goal to be reached and returns funds if it's not met
 *
 * After adding multiple features it's good practice to run integration tests
 * to ensure that subcontracts works together as intended.
 */
contract BlitzCrowdsale is CappedCrowdsale, RefundableCrowdsale, MintedCrowdsale, WhitelistedCrowdsale {

    function BlitzCrowdsale(uint256 _openingTime, uint256 _closingTime, uint256 _rate, 
                            address _wallet, uint256 _cap, MintableToken _token, uint256 _goal) public


        Crowdsale(_rate, _wallet, _token)
        CappedCrowdsale(_cap)
        TimedCrowdsale(_openingTime, _closingTime)
        RefundableCrowdsale(_goal)
        WhitelistedCrowdsale()
        
    {
        //As goal needs to be met for a successful crowdsale
        //the value needs to less or equal than a cap which is limit for accepted funds
        require(_goal <= _cap);        
        }
        
    function softcapDiscount(address _beneficiary, uint256 _weiAmount) internal {

        if (!goalReached()) {
            _weiAmount = _weiAmount.mul(12).div(10);
        }
        super._preValidatePurchase(_beneficiary, _weiAmount);
        require(weiRaised.add(_weiAmount) <= cap);
        }
    }

    

