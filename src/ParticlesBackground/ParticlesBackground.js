import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Config from './ParticleBackgroundConfig'
import './ParticlesBackground.css'
class ParticlesBackground extends Component {
  render () {
    return (
      <Particles
        params={Config}
        style={{
          zIndex: '-1',
          position: 'absolute',
          top: '0',
          left: '0'
        }}
    />
    )
  }
}

export default ParticlesBackground
