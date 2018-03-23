import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './ArrowNav.css'
class ArrowNav extends Component {
  render () {
    return (
      <div className='arrowNavContainer'>
        {this.props.links.map((link, i) => {
          return <NavLink to={`../projects${link.link}`} key={i} className='arrowNavLink'>
            <span className='arrowNavLinkName' style={{ border: this.props.currentPath === `/projects${link.link}` ? '2px solid #BA68C8' : '2px solid #d32f2f'}}>{link.name}</span>
            <div className='arrowNavArrow' style={{ borderLeft: this.props.currentPath === `/projects${link.link}` ? '22px solid #BA68C8' : '22px solid #d32f2f'}} /></NavLink>
        })}
      </div>
    )
  }
}

export default ArrowNav
