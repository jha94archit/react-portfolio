import React from 'react'
import Section from '../common/Section/Section'
import ProjectCard from '../common/ProjectCard/ProjectCard'
import './project.css'
import { project_data } from '../../Data/project_data'

function Project() {
    return (
        <div className="container" id="projects">
            <Section sectionHeader="Projects" />
            <div className="project-cards">
                {project_data.map(item =>(
                    <ProjectCard 
                        title={item.title}
                        desc={item.desc}
                        tag={item.tag}
                        link={item.link} />

                )
                )}
            </div>
        </div>
    )
}

export default Project
