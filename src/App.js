import React from "react";
// import "../node_modules/global-scss/src/global.scss";
import { Route, HashRouter, Router } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import history from "./utils/History";
import theme from "./theme/theme";
import store from "./store/store";
import Login from "./containers/Login";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <HashRouter basename="/">
          <Router history={history}>
            <div className="App">
              <Route exact path="/" component={Login} />
            </div>
          </Router>
        </HashRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
