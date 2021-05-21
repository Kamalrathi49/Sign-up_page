import React from "react";

import SignIn from "./component/sign-in/sign-in.jsx";
import SignUp from "./component/signup/signup.jsx";
import HomePage from "./component/homepage/homepage.jsx";





import { GlobalStyle } from "./global.style";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

class App extends React.Component {
 

  render() {
    return (
      <div>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route
              path="/sign-in"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignIn />
              }
            />
            <Route path="/sign-Up" component={SignUp} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}



export default App;
