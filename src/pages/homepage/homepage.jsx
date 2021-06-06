import React from "react";

import "./homepage.style.scss";

const HomePage = ({props}) => (
  <div className="containers" style={{ marginTop: "20px" }}>
    <div>
      <h1 className="heading">User Profile</h1>
    </div>
    <div className="social-profile">
      <button className="btn">Name:{this.props.currentUser.diaplayName}</button>
      <button className="btn">Email:</button>
      <button className="btn">Phone:</button>
      <button className="btn">Address</button>
      <button className="btn">FaceBook Profile</button>
      <button className="btn">Text on Whatsapp</button>
    </div>
  </div>
);

export default HomePage;
