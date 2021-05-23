import React from "react";
import CustomButton from "../custom-button/custom-button";

import { Link } from "react-router-dom";

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
      <div id="signin-container">
        <header>Sign In</header>
        <form method="post" onSubmit={this.handelSubmit}>
          <fieldset>
            <br /> <br />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="E-mail"
              required
            />{" "}
            <br />
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="Password"
              required
            />{" "}
            <br />
            <br />
            <CustomButton type="submit" id="submit">
              {" "}
              Sign In
            </CustomButton>
            <hr />
            <button onClick={signInWithGoogle} className="social-signin google">
              Log in with Google
            </button>
            <p style={{ color: "white" }}>
              Don't have an account:{" "}
              <Link to="/sign-up">
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

export default SignIn;
