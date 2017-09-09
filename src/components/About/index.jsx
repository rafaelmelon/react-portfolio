// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="b-about">
      <div className="container">
        <div className="row">
          <div className="four columns">
            <h2>About</h2>
          </div>
          <div className="eight columns">
            <p>I am Susana Vázquez Product / UX / UI Designer in the digital world and an architect in the “other” one.</p>
            <p>I want to be part of those who build usable, confortable and beautiful sites.</p>
            <p>I like to face new challenges so I have worked as an architect, but also as a photographer and a web designer / developer. I always pay attention to detail and I am a good listener so I can speak Spanish, Galician, English and French. </p>
            <p>See my<Link target="_blank" to='http://suix.es/assets/files/cvsusanavazquez.pdf'> curriculum vitae</Link></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
