import React, { Component } from 'react'
import './About.css'
import myFace from '../img/me.jpg'

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
    console.log(e.target.scrollTop)
    if (e.target.scrollTop < 1201 && e.target.scrollTop > 250) {
      if (this.state.item !== 1) {
        console.log(e.target.scrollTop)
        let item = this.state.item - 1
        this.setState({
          lastScrollPos: e.target.scrollTop,
          item
        })
        console.log('up')
        console.log(this.state)
      }
    } else if (e.target.scrollTop > 1200) {
      if (this.state.item !== 2) {
        let item = this.state.item + 1
        this.setState({
          lastScrollPos: e.target.scrollTop,
          item
        })
        console.log('down')
        console.log(this.state)
      }
    } else {
      console.log(e.target.scrollTop)
    }
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
        <p>Brand statement and resume here</p>
        <p>I am a Full Stack Web Developer that implements creative ideas to construct user friendly and functional applications. My goal-oriented way of thinking allows me to meet deadlines or goals in an efficient manner without sacrificing any functionality or user experiences.</p>
        <div className='sections'>
          <section className='aboutFirst' style={{opacity: this.state.item === 1 ? 1 : 0.5}}><h1>First</h1></section>
          <section className='aboutSecond' style={{opacity: this.state.item === 2 ? 1 : 0.5}}><h1>Second</h1></section>
        </div>
      </div>
    )
  }
}

export default About
