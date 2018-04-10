import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './Projects.css'
import ArrowNav from '../ArrowNav/ArrowNav'
import Project from '../Project/Project'
import ProjectData from './ProjectData'

class Projects extends Component {
  render() {
    let projectLinks = [
      {
        link: '/project-1',
        name: 'Project 1'
      },
      {
        link: '/project-2',
        name: 'Project 2'
      },
      {
        link: '/project-3',
        name: 'Project 3'
      },
      {
        link: '/p5-paint',
        name: 'p5 Paint'
      }
    ]

    return (
      <div className="projectsContainer">
        {/* <h1 className='projectsHeading'>Projects</h1> */}
        <div className="projectsRow">
          <ArrowNav
            currentPath={this.props.location.pathname}
            links={projectLinks}
          />
          <div className="project">
            <Switch>
              {/* make this use .map to make routes not like this!! */}
              <Route
                path="/projects/project-1"
                render={() => <Project data={ProjectData.project1} />}
              />
              <Route
                path="/projects/project-2"
                render={() => <Project data={ProjectData.project2} />}
              />
              <Route
                path="/projects/project-3"
                render={() => <Project data={ProjectData.project3} />}
              />
              <Route
                path="/projects/p5-paint"
                render={() => <Project data={ProjectData.p5Paint} />}
              />
              <Route
                path="/projects"
                render={() => <Redirect to="/projects/project-1" />}
              />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
