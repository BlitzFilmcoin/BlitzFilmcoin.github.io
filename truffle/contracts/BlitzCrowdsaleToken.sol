pragma solidity ^0.4.18;

import "./zeppelin2/token/ERC20/MintableToken.sol";


/**
 * @title BlitzCrowdsaleToken
 * @dev Very simple ERC20 Token that can be minted.
 * It is meant to be used in a crowdsale contract.
 */
contract BlitzCrowdsaleToken is MintableToken {

    string public constant name = "Blitz Token"; // solium-disable-line const-name-snakecase
    string public constant symbol = "BFT"; // solium-disable-line const-name-snakecase
    uint8 public constant decimals = 18; // solhint-disable-line
    
}
