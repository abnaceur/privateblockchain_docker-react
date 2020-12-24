import React, {Component} from "react";
import {Redirect, Link, Route, Switch} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-header">

                <Link to="/" className="logo">
                    <span className="logo-mini"><b>ABN</b></span>
                    <span className="logo-lg"><b>DAPP</b>dev</span>
                </Link>

                <nav className="navbar navbar-static-top" role="navigation">
                   
                </nav>
            </div>
        );
    }
}

export default Header;