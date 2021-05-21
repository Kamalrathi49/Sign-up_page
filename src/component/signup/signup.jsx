import React from "react";

import "./signup.style.scss";

import CustomButton from "../custom-button/custom-button";

import { Link } from "react-router-dom";

class SignUp extends React.Component {
  render() {
    return (
      <div id="login-box">
        <div class="left">
          <h1>Sign Up</h1>

          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password2"
            placeholder="Retype password"
          />

          <CustomButton>Sign up</CustomButton>
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

export default SignUp;
