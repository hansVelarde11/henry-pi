import { Link } from 'react-router-dom';
import React from "react";
import './landing.css'

export default function Landing() {

  return (
    <div className="MyImage">
        <img className="theImage" src="" alt="" />
        <Link to="/videogames">
          <button className="myButton">INSERT COIN</button>
        </Link>
    </div>
  );
}