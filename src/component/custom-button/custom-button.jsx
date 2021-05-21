import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`  ${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""}login-btn`}
    {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
