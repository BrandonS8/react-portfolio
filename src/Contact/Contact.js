import React, { Component } from 'react'
import './Contact.css'
class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        <h1>Reach Me!</h1>
        <a className="contactLink" href="mailto:brandonsears8@gmail.com">
          <p>
            <i className="fas fa-envelope contactIcon" />
            brandonsears8@gmail.com
          </p>
        </a>
        <a className="contactLink" href="https://github.com/BrandonS8">
          <p>
            <i className="fab fa-github contactIcon" />https://github.com/BrandonS8
          </p>
        </a>
        <a
          className="contactLink"
          href="https://www.linkedin.com/in/brandon-sears/"
        >
          <p>
            <i className="fab fa-linkedin contactIcon" />https://www.linkedin.com/in/brandon-sears/
          </p>
        </a>
      </div>
    )
  }
}

export default Contact
