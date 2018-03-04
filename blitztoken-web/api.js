/**
README
This is using ropsten test net
Todo:
1. Change the global address var to the relevant contract address
2. In init() function paste the ABI from remix into web3.eth.contract parameter
3. Access the relevant functions and fields of the contract (look at the functions at the bottom for an example)
4. React upon changes on the blockchain. Look at function setupHandlers on how to to this
5. put into index.html:
	<script src="./api.js"></script>
	<script>
	init();
	setupHandlers();
	</script>
*/


var blitz;
var blitzContract;
var web3;
var address = "0x8399d31135d5d6ea3723207fd6e66a7aee664bf4"
<<<<<<< HEAD
var divisor = 1;
=======
var divisor = 1000000000000000000;
>>>>>>> b11f44275dba9e10f43801be1c33f31e8dddcb73

function getDivisor() {
	return divisor;
}

function getAddress() {
	return address;
}

function init() {
	// init web3
	if (typeof web3 !== 'undefined') {
	    web3 = new Web3(web3.currentProvider);
	} else {
	    web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/" /*"http://localhost:8545"*/));
	}

	// init Blitz -- params: Operating Ethereum account
	//		constants: Etherium Contract address

	web3.eth.defaultAccount = web3.eth.accounts[0];


	// NOTE: PASTE ABI FROM REMIX HERE
	blitzContract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [],
		"name": "totalEthAmount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "icoEnd",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tokenValue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pullPayout",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "refund",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "icoStart",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "numTokens",
				"type": "uint256"
			},
			{
				"name": "beneficiary",
				"type": "address"
			}
		],
		"name": "giveToken",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "currentSaleAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pushPayin",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buyToken",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "_to",
				"type": "address"
			}
		],
		"name": "transferToken",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tokensPerEth",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "distribute",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "funded",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "hardCap",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Freeze",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Participate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "period",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Reconcile",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	}
]);
	blitz = blitzContract.at(address);
}


function setupHandlers() {
	updateValues();
	window.setInterval(updateValues, 6000);

/*
	y = web3.eth.filter('latest');
	y.watch((err, res) => {
	  if (err) {
	    console.log(`Watch error: ${err}`);
	  } else {
	    // Update Pricing and Remaining Tokens
	document.getElementById("price").innerHTML = getTokenPrice();
	document.getElementById("coinsLeft").innerHTML = getRemainingTokens();
	document.getElementById("coinsTotal").innerHTML = getTotalTokens();
	    web3.eth.getBalance(address, (err, bal) => {
	      if (err) {
		console.log(`getBalance error: ${err}`);
	      } else {
		window.alert(bal);
		console.log(`Balance is: ${web3.fromWei(bal, "ether")}`);
	      }
	    });
	  }
	});
*/
}

function getEndTime() {
	return web3.toDecimal(blitz.icoEnd());
}

function updateValues() {
	document.getElementById("price").innerHTML = "Token price: " +getTokenPrice() + " ETH";
<<<<<<< HEAD
	document.getElementById("coinsLeft").innerHTML = "<b>" + getRemainingTokens() / getDivisor() + "</b>" + " coins available";
=======
	document.getElementById("coinsLeft").innerHTML = getRemainingTokens() / getDivisor() + " coins still available";
>>>>>>> b11f44275dba9e10f43801be1c33f31e8dddcb73
	//document.getElementById("coinsTotal").innerHTML = "Total amount of tokens: " + getTotalTokens();
}


function getTokenPrice() {
	var tokensPerEth = web3.toDecimal(blitz.tokensPerEth());
	return tokensPerEth > 0 ? web3.fromWei(1 / tokensPerEth) : 0
}

function getTotalTokens() {
	// totalSupply
	return web3.toDecimal(blitz.hardCap());
}

function getRemainingTokens() {
	// totalSupply - totalAmount
	return web3.toDecimal(blitz.hardCap()) - web3.toDecimal(blitz.totalSupply());
}







