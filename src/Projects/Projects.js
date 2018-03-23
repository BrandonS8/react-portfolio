import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import './Projects.css'
import ArrowNav from '../ArrowNav/ArrowNav'
import Project from '../Project/Project'
import ProjectData from './ProjectData'

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
        <div className='projectsRow'>
          <ArrowNav currentPath={this.props.location.pathname} links={projectLinks} />
          <div className='project'>
          <Switch>
              <Route path='/projects/project-1' render={() => <Project data={ProjectData.project1} /> }/>
              <Route path='/projects/project-2' render={() => <Project data={ProjectData.project2} /> }/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
