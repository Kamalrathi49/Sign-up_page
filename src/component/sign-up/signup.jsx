import React from "react";
import "./signup.style.scss";

import CustomButton from "../custom-button/custom-button";

import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSumbit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div id="signup-container">
        <header>Sign Up</header>
        <form method="post" onSubmit={this.handleSumbit}>
          <fieldset>
            <br />
            <input
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              id="username"
              placeholder="Full Name"
              required
              autoFocus
            />

            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              id="email"
              placeholder="E-mail"
              required
            />

            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              id="password"
              placeholder="Password"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              id="confirm-password"
              placeholder="Confirm Password"
              required
            />
            <br/>

            <CustomButton type="submit" id="submit">
              {" "}
              Sign Up
            </CustomButton>
            <hr />
            <button onClick={signInWithGoogle} className="social-signin google">
              Sign up with Google
            </button>
            <p style={{ color: "white" }}>
              Already have an account:{" "}
              <Link to="/signin">
                {" "}
                <span style={{ color: "#4169E1", textDecoration: "underline" }}>
                  Sign up
                </span>
              </Link>{" "}
            </p>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SignUp;
