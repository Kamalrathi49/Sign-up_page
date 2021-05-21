import React from "react";
import CustomButton from "../custom-button/custom-button";

import { Link } from "react-router-dom";

import FormInput from "../form-input/form-input";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handelSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <div id="login-box">
          <div class="up-left">
            <h1 className="signin-title">Sign In</h1>

            <form onSubmit={this.handelSubmit}>
              <FormInput
                type="text"
                value={this.state.email}
                name="email"
                handleChange={this.handleChange}
                label="Email"
                required
              />

              <FormInput
                type="password"
                value={this.state.password}
                name="password"
                handleChange={this.handleChange}
                label="Password"
                required
              />
            </form>
            <div className="login-btns">
              <CustomButton type="submit">Sign in</CustomButton>
              <button onClick={signInWithGoogle} class="social-signin google">
                Log in with Google
              </button>
            </div>

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
        </div>
      </div>
    );
  }
}

export default SignIn;
