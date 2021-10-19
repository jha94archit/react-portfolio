import React from 'react'
import './about.css'
import Section from '../common/Section/Section'
import Timeline from '../common/Timeline/Timeline'
import { abt_me } from '../../Data/about_me'

function About() {
    return (
        <div className="container" id="about">
                <Section sectionHeader="About Me"
                sectionContent={abt_me.desc}/>
                <Timeline />
            </div>
    )
}

export default About
