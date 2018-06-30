import React from "react";
import { IndexRoute, Router, Route, hashHistory } from "react-router";

// Components
import Home from "./containers/Home/Home";
import App from "./containers/App/App";

// Includes
import "./Assets/css/default.min.css";

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
    </Router>
);
