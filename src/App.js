import React from "react";

import SignIn from "./component/sign-in/sign-in.jsx";
import SignUp from "./component/signup/signup.jsx";

import { GlobalStyle } from "./global.style";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <BrowserRouter>
        <Switch>
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
