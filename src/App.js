import React from "react";
// import "../node_modules/global-scss/src/global.scss";
import { Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import history from "./utils/History";
import store from "./store/store";
import Login from "./containers/Login";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Route exact path="/" component={Login} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
