import React from "react";
import CustomButton from "../custom-button/custom-button";

import { Link } from "react-router-dom";

import "./sign-in.style.scss";

class SignIn extends React.Component {
  render() {
    return (
      <div id="login-box">
        <div class="up-left">
          <h1>Sign In</h1>

          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />

          <CustomButton>Sign in</CustomButton>
          <p>
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Sign up
            </Link>
          </p>
        </div>

        <div class="right">
          <span class="loginwith">
            Sign in with
            <br />
            social network
          </span>

          <button class="social-signin facebook">Log in with facebook</button>
          <button class="social-signin twitter">Log in with Twitter</button>
          <button class="social-signin google">Log in with Google+</button>
        </div>
        <div class="or">OR</div>
      </div>
    );
  }
}

export default SignIn;
