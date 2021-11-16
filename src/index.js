import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/index.css";
import { Provider } from "react-redux";
import "./assets/css/sidebar.css";
import "./assets/css/dashboard.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import RootReducers from "./reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
const store = createStore(RootReducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
