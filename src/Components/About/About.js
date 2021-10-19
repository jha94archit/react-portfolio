import React from 'react'
import './about.css'
import Section from '../common/Section/Section'
import { abt_me } from '../../Data/about_me'

function About() {
    return (
        <div className="container" id="about">
            <Section sectionHeader="About Me"
            sectionContent={abt_me.desc}/>
        </div>
    )
}

export default About
