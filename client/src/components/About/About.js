import React from 'react'
import NavBar from '../NavBar/NavBar'
import imagen from '../../img/about.gif'
import './about.css'


function About() {
    return (
        <>
        <NavBar />
        <div className="container-about">
            <div className="div-foto">
               <img src={imagen} alt="foto"></img>
            </div>
            <h1>HENRY PI</h1>
            <h1>Velarde Fabian, Hans Ssleit</h1>
        </div>
        </>
    )
}

export default About

