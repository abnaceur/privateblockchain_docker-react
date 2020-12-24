import  React, { Component } from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import { router, route, Browserhistory } from "react-router";
import Home from "./components/Home";

class App extends Component {
    render() {
        return (
            <div className="row">
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App; 