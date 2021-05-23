import React from "react";

import SignIn from "./component/sign-in/sign-in.jsx";
import SignUp from "./component/signup/signup.jsx";
import HomePage from "./component/homepage/homepage.jsx";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-Up" component={SignUp} />
            <Route
              exact
              path="/"
              component={HomePage}
              currentUser={this.state.currentUser}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
