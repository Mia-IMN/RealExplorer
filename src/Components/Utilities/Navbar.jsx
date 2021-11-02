import React from "react";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setshowNavbar] = useState(false);

  const closeNavbar = () => {
    setshowNavbar((prev) => !prev);
  };

  return (
    <div className="Navbar">
      <FaIcons.FaBars
        size="1.5rem"
        style={{ padding: "1rem", cursor: "pointer" }}
        onClick={closeNavbar}
      />
      {showNavbar ? (
        <div className="links">
          <FaIcons.FaTimes
            size="1.5rem"
            style={{ padding: "1rem", cursor: "pointer" }}
            onClick={closeNavbar}
          />
          <p className="Buy" onClick={closeNavbar}>Buy</p>
          <p onClick={closeNavbar}>Rent</p>
          <p onClick={closeNavbar}>Sell</p>
          <p onClick={closeNavbar}>Home Loans</p>
          <p onClick={closeNavbar}>Save to Rent/Buy</p>
          <p onClick={closeNavbar}>Help</p>
          <p onClick={closeNavbar}>Sign Up</p>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
