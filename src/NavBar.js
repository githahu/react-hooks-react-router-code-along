import React from 'react'
import { NavLink } from 'react-router-dom';

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 7px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

export default function NavBar() {
    return(
        <div>
          <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{background: "darkblue",}}
          >
            Home
          </NavLink>  
          <NavLink to="/login" exact style={linkStyles} activeStyle={{background: "darkblue",}}> Login
          </NavLink>  
          <NavLink to="/About" exact style={linkStyles} activeStyle={{background: "darkblue",}}>About</NavLink>
        </div>
      )
    
}
