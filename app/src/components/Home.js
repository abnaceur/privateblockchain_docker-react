import React, {Component} from "react";
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
import Header from './Header';
import Footer from './Footer';

class Home extends React.Component {
    constructor(props) {
        super(props);
    
    }

    componentDidMount() {
        if(typeof web3 !== 'undefined')
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
         
        web3.eth.getBalance("0x007CcfFb7916F37F7AEEf05E8096ecFbe55AFc2f").then(value => {
            console.log('this value : ', value / 1000000000000000000, ' Ether' );
        });

        web3.eth.getAccounts().then(value => {
            console.log('Accounts : ', value );
        });
    
    }
    

    render() {
        
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Home;