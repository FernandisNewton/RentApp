import React, { Component } from "react";

import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Store";
class rootApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default registerRootComponent(rootApp);
