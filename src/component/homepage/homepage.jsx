import React from "react";

import CustomButton from "../custom-button/custom-button";

import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

const HomePage = ({ currentUser }) => (
  <div>
    {currentUser ? (
      <CustomButton onClick={() => auth.signOut()}>Sign out</CustomButton>
    ) : (
      <Link to="./sign-in">
        <CustomButton>Sign in</CustomButton>
      </Link>
    )}
  </div>
);

export default HomePage;
