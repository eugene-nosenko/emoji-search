import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Favorites from "./Favorites";

import "./index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  blackList: ["auth"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// https://github.com/zalmoxisus/redux-devtools-extension

/* eslint-disable no-underscore-dangle */

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* eslint-enable */

const persistor = persistStore(store);

const app = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route path="/favorites" component={Favorites} />
          <Route path="/" component={App} exact />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

export { persistor, store };
