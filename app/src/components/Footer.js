import React, {Component} from 'react';
import {router, route, Browserhistory} from "react-router";


export default  class Footer extends Component {


    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-bottom">
                    <div className="text-center">
                        <span className="footer-text"> © 2018 Copyright :
                            <strong>Private blockchain - Abnaceur</strong>
                        </span>
                    </div>
                </nav>
            </div>

        )
    };
}

