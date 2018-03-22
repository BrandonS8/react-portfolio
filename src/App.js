import React, { Component } from 'react'
import {Route, NavLink, Redirect, Switch} from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import ParticlesBackground from './ParticlesBackground/ParticlesBackground'

class App extends Component {
  constructor (p) {
    super()
    this.state = {
      position: 0
    }
  }
  // componentDidMount () {
  //   window.addEventListener('wheel', () => {
  //     console.log('scroll')
  //   })
  // }

  render () {
    return (
      <div>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
        <main>
          <Switch>
            <Route path='/projects' render={() => <Projects />} />
            {/* make sure these are in order  */}
            <Route path='/' render={() => <Home />} />
          </Switch>
        </main>
        <ParticlesBackground />
      </div>
    )
  }
}

export default App
