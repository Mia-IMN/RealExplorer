import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "@react-spring/core";
import Image1 from "../Images/Ellipse 5.png";
import Image2 from "../Images/Ellipse 4.png";
import Ellipse from "../Images/Ellipse 3.png";
import { FaTimes } from "react-icons/fa";

const Signup = ({ setshowModal, showModal, setopenLogIn, login }) => {
  const openModal = () => {
    setshowModal((prev) => !prev);
  };
//   const animation = useSpring({
//     config:{
//         duration:100
//     },
//     opacity: showModal ? 1 : 0,
//     transform: showModal ? `translateY(0%)` : `translateY(100%)`
// })



  return (
    <>
      {showModal ? (
        <div className="signup">
          <div className="modalwrapper">
            <div className="left-side">
              <h3>Welcome to RealExplorer</h3>
              <h4 className="toptext">
                Sign up an account by filling the form below
              </h4>
              <label className="label">Email</label>
              <br />
              <input type="text" className="input" id="" required />
              <br />
              <label className="label">Name</label>
              <br />
              <input type="text" className="input" id="" required />
              <br />
              <label className="label">Phone number</label>
              <br />
              <input type="number" className="input" id="" />
              <br />
              <label className="label">Password</label>
              <br />
              <input type="password" className="input" id="" />
              <br />
              <label className="label">Confirm Password</label>
              <br />
              <input type="password" className="input" id="" />
              <br />
              <div className="agreement">
                <input type="checkbox" className="checkbox" id="" />
                <h4>
                  By clicking sign up, you hereby are in agreement <br />
                  with our <span> Terms & Conditions and Disclaimer</span>
                </h4>
              </div>
              <button>Sign Up</button> <br />
              <h4>
                Already have an account? <span onClick={login}> Log In </span>
              </h4>
            </div>
            <div className="right-side">
              <img src={Image1} className="image1" />
              <img src={Image2} className="image2" />
              <h5 className="Logo logo">
                <img src={Ellipse} alt="" />
                RealExplorer{" "}
              </h5>
            </div>
            <div className="closebutton" onClick={openModal}>
              <FaTimes />
            </div>
          </div>
          </div>
      ) : null}
    </>
  );
};

export default Signup;
