import React, { Component } from 'react'
import './About.css'
import myFace from '../img/me.jpg'

class About extends Component {
  constructor () {
    super()
    this.state = {
      lastScrollPos: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll (e) {
    if (this.state.lastScrollPos > e.target.scrollTop) {
      this.setState({
        lastScrollPos: e.target.scrollTop
      })
      console.log('up')
    } else {
      this.setState({
        lastScrollPos: e.target.scrollTop
      })
      console.log('down')
    }
  }

  render () {
    return (
      <div className='aboutContainer' onScroll={this.handleScroll}>>
        <div className='aboutTop'>
          <img className='aboutImg' src={myFace} alt='pic of me' />
          <div className='aboutNameContainer'>
            <h2 className='firstName aboutName'>Brandon</h2>
            <h2 className='lastName aboutName'>Sears</h2>
          </div>
        </div>
        <p>Brand statement and resume here</p>
        <p>I am a Full Stack Web Developer that implements creative ideas to construct user friendly and functional applications. My goal-oriented way of thinking allows me to meet deadlines or goals in an efficient manner without sacrificing any functionality or user experiences.</p>
        <section className='aboutFirst'><h1>First</h1></section>
      </div>
    )
  }
}

export default About
