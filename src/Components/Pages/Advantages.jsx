import React from "react";
import background from "../Images/Rectangle.png";
import good from "../Images/Path.png";
import { FaTimes } from "react-icons/fa";

const Advantages = () => {
  return (
    <div
      className="Advantages"
      // style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
    >
      <img src={background} className="background" />
      <div className="advantages">
        <div className="title">ADVANTAGES</div>
        <h1>Why Real Explorer is better</h1>
        <div className="white-bg">
          <div className="content">
            <div className="header">
              <p>Traditional home sale</p>
              <h3>VS</h3>
              <p>
                Selling to <span>RealExplorer</span>
              </p>
            </div>
            <div className="items">
              <div className="left_hand_side">
                <p>
                  Risk of buyer financing fall-through <FaTimes color="#64626a"/>
                </p>
                <p>
                  Hours of prep work and home showings <FaTimes color="#64626a"/>
                </p>
                <p>
                  Manage repairs yourself <FaTimes color="#64626a"/>
                </p>
                <p>
                  Uncertain closing timeline <FaTimes color="#64626a"/>
                </p>
              </div>
              <div className="right_hand_side">
                <p>
                  <img src={good} alt="" />
                   Competitive cash offer in 24 hours
                </p>
                <p>
                <img src={good} alt="" />
                   No listing, prep work, or showings
                </p>
                <p>
                <img src={good} alt="" />
                   Skip the repair work and deduct the costs
                </p>
                <p>
                <img src={good} alt="" />
                   Choose any close date from 10-60 days
                </p>
              </div>
            </div>
          </div>
          <div className="figure">485,091+</div>
          <p className="home">HOME AVAILABLE</p>
          <p>
            Every 60 seconds, a homeowner requests an offer from Real Explorer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
