import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Global Style
import "./theme/globalStyles";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
