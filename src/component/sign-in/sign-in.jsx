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
      <div id="container">
        <header>Sign In</header>
        <form method="post">
          <fieldset>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Full Name"
              required
              autofocus
            />
            <br />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
            />
            <br />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <br />

            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password"
              required
            />

            <label for="submit"></label>
            <CustomButton
              type="submit"
              name="submit"
              id="submit"
              
            >
              {" "}
              Sign In
            </CustomButton>
            <p style={{color:"white"}}>Don't have an account: <Link to="/sign-up"> <span style={{color:"#4169E1", textDecoration:"underline"}} >Sign up</span></Link> </p>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SignIn;
