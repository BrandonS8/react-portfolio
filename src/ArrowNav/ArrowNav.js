import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './ArrowNav.css'
class ArrowNav extends Component {
  render () {
    console.log(this.props.links)
    return (
      <div className='arrowNavContainer'>
        {this.props.links.map((link, i) => {
          return <NavLink to={link.link} key={i} className='arrowNavLink'>{link.name}</NavLink>
        })}
      </div>
    )
  }
}

export default ArrowNav
