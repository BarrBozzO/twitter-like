import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import "./index.css";
import store from "./store";

import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
