import React, { Component } from 'react'
import {Route, NavLink, Redirect, Switch} from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import About from './About/About'
import Contact from './Contact/Contact'
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
      <div className='app'>
        <main>
          <Switch>
            <Route path='/contact' render={() => <Contact />} />
            <Route path='/about' render={() => <About />} />
            <Route path='/projects' render={() => <Projects />} />
            {/* make sure these are in order  */}
            <Route path='/' render={() => <Home />} />
          </Switch>
        </main>
        <nav>
          <NavLink exact to='/' activeClassName='currentPage'>Home</NavLink>
          <NavLink to='/projects' activeClassName='currentPage'>Projects</NavLink>
          <NavLink to='/about' activeClassName='currentPage'>About</NavLink>
          <NavLink to='/contact' activeClassName='currentPage'>Contact</NavLink>
        </nav>
        <ParticlesBackground />
      </div>
    )
  }
}

export default App
