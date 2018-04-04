import React, { Component } from 'react'
import './Resume.css'
class Resume extends Component {
  render() {
    return (
      <div>
        <section>
          <h1 className='sectionTitle'>Skills</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>Adobe Creative Suite</li>
          </ul>
        </section>
        <section>
          <h1 className='sectionTitle'>Web Development Experience</h1>
          <h2>Web Development Immersive Student at General Assembly</h2>
          <ul>
            <li>Completed an immersive thirteen week long full-stack web development course that covers a variety of languages’ fundamentals, front and back end frameworks, the development process and methods used in the web development field.</li>
            <li>Completed 3 Indivual Projects (Projects 1/2/4) and one Group Project (Project 3). These are listed on the projects page.</li>
          </ul>
        </section>
        <section>
          <h1 className='sectionTitle'>Other Experience</h1>
          <h2>IT and Networking Student at Allegany County Center for Career and Technical Education</h2>
          <ul>
            <li>Completed multiple support requests daily.</li>
            <li>Requests required me and the others who worked on the request to interact with students and staff in a professional manner.</li>
            <li>I would often have to explain what I am doing to fix the problem in layman’s terms as teachers or other clients need to know what would be done and often asked questions during the process.</li>
            <li>Experience working on a team in a professional environment.</li>
          </ul>
          <h2>Interned for Allegany County Board of Education through CCTE’s IT program</h2>
          <h2>Freelance Graphic Designer</h2>
          <ul>
            <li>Fully Self-taught</li>
            <li>Worked with individuals, businesses and organizations</li>
          </ul>
          <h2>FBLA National 8th Place Winner in Cybersecurity</h2>
          <ul>
            <li>Self-guided research and studying as it wasn’t really covered in my school, created my own study materials which I believe played a big role in placing top 10 in the nation against others who have been learning it with an instructor for years.</li>
          </ul>
        </section>
        <section>
          <h1 className='sectionTitle'>Education</h1>
          <h2>General Assembly</h2>
          <h3>Web Development Immersive</h3>
          <h2>Center for Career and Technical Education</h2>
          <h3>IT and Networking</h3>
        </section>
      </div>
    )
  }
}

export default Resume