import React from 'react'
import './ProjectCard.css'
import GitHubIcon from '@material-ui/icons/GitHub';


function ProjectCard({title, desc, tag, link}) {
    return (
        <div className="project-card">
            <div className="project-title">
                <h4>{title}</h4>
            </div>
            <div className="project-desc">
                <p>{desc}</p>
            </div>
            <div className="tag">
                <h5>{tag}</h5>
            </div>
            <a href={link}>
            <div className="project-buttons">
                <div className="project-link-icon">
                    <GitHubIcon />
                </div>
                <div className="button-label">
                    Github
                </div>
            </div></a>
        </div>
    )
}

export default ProjectCard
