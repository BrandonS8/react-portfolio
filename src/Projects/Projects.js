import React, { Component } from 'react'
import './Projects.css'
import ArrowNav from '../ArrowNav/ArrowNav'

class Projects extends Component {
  render () {
    let projectLinks = [
      {
        link: '/project-1',
        name: 'Project 1'
      },
      {
        link: '/project-2',
        name: 'Project 2'
      }
    ]

    return (
      <div className='projectsContainer'>
        <h1 className='projectsHeading'>Projects</h1>
        <div className='projects' />
        <ArrowNav links={projectLinks} />
      </div>
    )
  }
}

export default Projects
