import React from "react";

import "./signup.style.scss";

import CustomButton from "../custom-button/custom-button";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import { Link } from "react-router-dom";

class SignUp extends React.Component {
  render() {
    return (
      <div id="signup-container">
        <header>Sign Up</header>
        <form method="post">
          <fieldset>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Full Name"
              required
              autoFocus
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />

            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password"
              required
            />

            <label htmlFor="submit"></label>
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
              <Link to="/sign-in">
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
