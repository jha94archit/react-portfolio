import React from 'react'
import './SkillCard.css'

function SkillCard({category, skills}) {
    return (
        <div className="skill-card">
            <div className="skill-header">
                <h3>{category} <span className="span-color">.</span></h3>
            </div>
            <div className="skill-content">
             {skills.map(skill => (
                 <h5>{skill}</h5>
             ))}
         </div>
        </div>
    )
}

export default SkillCard;
