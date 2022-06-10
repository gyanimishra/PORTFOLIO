import React from "react";
import footerImg from "./logo/logo (1).png";
function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
    
      <span
        className="copyright"
        style={{ color: "black", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2021 programmer GYAN PRAKASH MISHRA. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;