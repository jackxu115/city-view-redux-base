import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import for redux
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

// create store
const reduxStore = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);


