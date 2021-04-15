import React from "react";
import logo from "../images/logo.png";

function User() {
  return (
    <div className="User">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="info">
        <p>Adınız Soyadınız</p>
        <a href="#">Çıkış Yap!</a>
      </div>
    </div>
  );
}

export default User;
