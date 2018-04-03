import React, { Component } from 'react'
import './About.css'
import myFace from '../img/me.jpg'
import Resume from '../Resume/Resume'

class About extends Component {
  constructor () {
    super()
    this.state = {
      lastScrollPos: 0,
      item: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

// redo this using lastscrollpos to know if up or down then do the other stuff check for difference and stuff??

  handleScroll (e) {
  }

  render () {
    return (
      <div className='aboutContainer' onScroll={this.handleScroll}>
        <div className='aboutTop'>
          <img className='aboutImg' src={myFace} alt='pic of me' />
          <div className='aboutNameContainer'>
            <h2 className='firstName aboutName'>Brandon</h2>
            <h2 className='lastName aboutName'>Sears</h2>
          </div>
        </div>
        <p>I am a Full Stack Web Developer that implements creative ideas to construct user friendly and functional applications. My goal-oriented way of thinking allows me to meet deadlines or goals in an efficient manner without sacrificing any functionality or user experiences.</p>
        <div className='sections'>
          <Resume />
          <section className='aboutFirst' style={{opacity: this.state.item === 1 ? 1 : 0.5}}><h1>First</h1></section>
          <section className='aboutSecond' style={{opacity: this.state.item === 2 ? 1 : 0.5}}><h1>Second</h1></section>
        </div>
      </div>
    )
  }
}

export default About
