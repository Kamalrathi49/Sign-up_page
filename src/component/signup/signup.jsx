import React from "react";

import "./signup.style.scss";

import CustomButton from "../custom-button/custom-button";

import {signInWithGoogle} from "../../firebase/firebase.utils"

import { Link } from "react-router-dom";

class SignUp extends React.Component {
  render() {
    return (
      <div className="sign-up">
        <div id="login-box">
          <div class="left">
            <h1 className="signup-title">Sign Up</h1>

            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="password2"
              placeholder="Retype password"
            />

            <div className="login-btns">
              <CustomButton type="submit">Sign in</CustomButton>
              <button onClick={signInWithGoogle} class="social-signin google">
                Log in with Google
              </button>
            </div>

            <p>
              Already have an account?{" "}
              <Link
                to="/sign-in"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
