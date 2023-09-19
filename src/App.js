import React from 'react'

import { Route, Switch } from 'react-router-dom';
import About from './About'
import Login from './Login'
import Home from './Home'
import NavBar from './NavBar'

export default function App() {
  return (
    <div>
        <NavBar />
        <Switch>
        
            <Route path="/About">
            <About />
            </Route>  
            <Route path="/Login">
            <Login />
            </Route>
            <Route path="/">
            <Home />
        
            </Route>
        </Switch>
      
    </div>
  )
}
