import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar-div">
                <NavLink to="/"><button>Inicio</button></NavLink>
                <NavLink to="/videogames"><button>Videojuegos</button></NavLink>
                <NavLink to="/crearjuego"><button>Registra tu juego</button></NavLink>
                <NavLink to="/about"><button>Acerca de</button></NavLink>
        </div>
    )
}

export default NavBar
