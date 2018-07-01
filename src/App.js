import React, { Component } from "react";
import {
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom";

// Components
import NavigationBar from "./components/NavigationBar/NavigationBar";

// Containers
import Home from "./containers/Home/Home";
import Blog from "./containers/Blog/Blog";

const Tacos = ({ routes }) => (
    <div>
        <h2>Tacos</h2>
        <ul>
            <li>
                <Link to="/tacos/bus">Bus</Link>
            </li>
            <li>
                <Link to="/tacos/cart">Cart</Link>
            </li>
        </ul>

        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
);

const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;


// Route Config
const routes = [
    {
        path: "/blog",
        component: Blog
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    }
];

// Wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
    <Route
        path={route.path}
        render={(props) => (
        // Pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )}
    />
);

class App extends Component {
    render () {
        return (
            <div>
                <Router>
                    <div>
                        <NavigationBar/>
                        <Route exact path="/" component={Home} />
                        <Link to="/tacos">Tacos</Link>
                        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}

                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
