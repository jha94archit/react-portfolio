import React from 'react'
import './section.css'

function Section({sectionHeader, sectionContent}) {
    return (
        <div className="section">
            <div className="section-header">
                <h3>{sectionHeader}<span className="span-color">.</span></h3>    
            </div>
            <div className="section-content">
                <p>{sectionContent}</p>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique necessitatibus officiis, esse voluptatem consectetur expedita dolores minus repellendus nobis? Quaerat quia recusandae animi vitae corrupti. Earum sequi adipisci asperiores incidunt.</p> */}
            </div>            
        </div>
    )
}

export default Section
