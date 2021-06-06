import React from "react";
import CustomButton from "../custom-button/custom-button";

import { auth } from "../../firebase/firebase.utils";

const SignOut = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? (
        <CustomButton onClick={() => auth.signOut()}>Sign out</CustomButton>
      ) : null}
    
    </div>
  );
};

export default SignOut;
