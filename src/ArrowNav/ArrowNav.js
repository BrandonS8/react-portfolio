import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './ArrowNav.css'
class ArrowNav extends Component {
  render () {
    return (
      <div className='arrowNavContainer'>
        {this.props.links.map((link, i) => {
          return <NavLink to={`../projects${link.link}`} key={i} className='arrowNavLink'>
            <div className='arrowNavEffect' /><span className='arrowNavLinkName' style={{
              background: this.props.currentPath === `/projects${link.link}` ? '#BA68C8' : 'none'}}>{link.name}</span></NavLink>
        })}
      </div>
    )
  }
}

export default ArrowNav
