import React, { Component } from "react";
import {
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom";

// Containers
import Home from "./containers/Home/Home";
import Blog from "./containers/Blog/Blog";

const Topic = ({ match }) => (
    <div>
        <h2>{match.params.topicId}</h2>
    </div>
);

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
            <li><Link to={`${match.url}/components`}>Components</Link></li>
            <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
        </ul>

        <Route exact path="/topics/:topicId" component={Topic} />
    </div>
);


class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">Blog</Link></li>
                        <li><Link to="topics">Topics</Link></li>
                    </ul>

                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={Blog} />
                    <Route path="/topics" component={Topics} />
                </div>
            </Router>
        );
    }
}

export default App;
