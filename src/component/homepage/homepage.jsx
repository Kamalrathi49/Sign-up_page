import React from "react";

import CustomButton from "../custom-button/custom-button";

import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

const HomePage = ({ currentUser }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-bloack">
        <span>Product</span>
      </div>

      <div className="header-bloack">
        <span>Discription</span>
      </div>

      <div className="header-bloack">
        <span>Quantity</span>
      </div>

      <div className="header-bloack">
        <span>Price</span>
      </div>

      <div className="header-bloack">
        <span>Remove</span>
      </div>
    </div>

    {currentUser ? (
      <CustomButton onClick={() => auth.signOut()}>Log out</CustomButton>
    ) : (
      <Link to="./sign-in">
        <CustomButton>Sign in</CustomButton>
      </Link>
    )}
  </div>
);

export default HomePage;
