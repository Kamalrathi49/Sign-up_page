import React from "react";

import SignIn from "./component/sign-in/sign-in.jsx";
import SignUp from "./component/sign-up/signup.jsx";
import SignOut from "./component/sign-out/signOut.jsx";
import HomePage from "./component/home-page/homepage.jsx";

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <SignOut currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={SignUp} />
          <Route exact  path="/signin" component={SignIn} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
