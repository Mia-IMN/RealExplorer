import React from 'react';
import Image1 from '../Images/House.jpg';
import Navbar from '../Utilities/Navbar';
import Navigation from '../Utilities/Navigation';
import Searchbar from '../Utilities/Searchbar';


const Homepage = () => {
    return (
        <div className="Homepage">
            <Navigation />
            <Navbar />
            <div className="headText">
                <h3>Find out a place <br /><span> you'll love to live</span></h3>
                <p>With the most complete source of homes <br /> for sale & real estate near you</p>
            <Searchbar />
            </div>
            <img src={Image1} className="House" />
        </div>
    )
}

export default Homepage
