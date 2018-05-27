import React, {Component} from "react";
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
import Header from './Header';
import Footer from './Footer';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accouts: [],
            balance: '',
        }
    
    }

    componentDidMount() {
        if(typeof web3 !== 'undefined')
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
         
        web3.eth.getBalance("0x007CcfFb7916F37F7AEEf05E8096ecFbe55AFc2f").then(value => {
            console.log('this value : ', value / 1000000000000000000, ' Ether' );
            this.setState({
                balance: value / 1000000000000000000
            })
        });

        web3.eth.getAccounts().then(value => {
            console.log('Accounts : ', value );
            web3.eth.defaultAccount = value[10];
            this.setState({
                accouts: value
            })
        });
        
        let myContract = new web3.eth.Contract([
            {
                "constant": true,
                "inputs": [],
                "name": "getVar",
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
                "constant": false,
                "inputs": [],
                "name": "myVariable",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ], '0x6e83EF320471320378640Af6ac0111Ade8465CeD' , {
            from: '0x6Abd228e4d94ccED7cf975924B583bE1be3BbFE0', // default from address
            gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
        });
        
        //.at('0xDB571079aF66EDbB1a56d22809584d39C20001D9')
        //const hey = myContract.at('0x007CcfFb7916F37F7AEEf05E8096ecFbe55AFc2f');
        //console.log('MyContract', myContract);
        //myContract.methods.getVar().send({ from: '0x6Abd228e4d94ccED7cf975924B583bE1be3BbFE0' })
  //.then(receipt => { 
    //  console.log(receipt);
   //});
        //console.log('MyContract AT', hey)

        myContract.methods.getVar().call().then(console.log);
        console.log  ('Contract', myContract.methods.getVar());

    }
    

    render() {
        
        return (
            <div>
                <Header />
                <div>
                    <h3>Your balance is : <b>{this.state.balance} Ether</b></h3>
                    <h3>Lists of accounts</h3>
                    <ul>
                        {this.state.accouts.map((account, index) => 
                        <li key={index}>{account}</li>
                        )}
                    </ul>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;