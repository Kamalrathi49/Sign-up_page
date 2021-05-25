import React from "react";

import SignIn from "./pages/sign-in_page/sign-in.jsx";
import SignUp from "./pages/sign-up_page/signup.jsx";
import SignOut from "./component/sign-out/signOut.jsx";
import HomePage from "./pages/homepage/homepage.jsx";

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
            <Route path="/signup" component={SignUp} />
            <Route path="/" component={HomePage} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
