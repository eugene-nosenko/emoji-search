import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";

// https://github.com/zalmoxisus/redux-devtools-extension

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
