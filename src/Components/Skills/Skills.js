import React from 'react'
import './skills.css'
import Section from '../common/Section/Section'
import SkillCard from '../common/SkillCard/SkillCard'
import { skills_dat } from '../../Data/skills'

function Skills() {
    return (
        <div className="container" id="skills">
            <div className="skill-content">
                <Section sectionHeader="Skills"/>
            </div>
            <div className="skill-cards">
                {skills_dat.map(item => (
                    <SkillCard category={item.category} skills={item.skills} />
                )
                )}
            </div>
        </div>
    )
}

export default Skills;
