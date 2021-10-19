import React from 'react'
import './timeline.css'
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import DeveloperModeSharpIcon from '@material-ui/icons/DeveloperModeSharp';

function Timeline() {
    return (
        <div className="timeline-container">
            <div className="item">
                <div className="item-icon">
                    <SchoolIcon fontSize='large'/>
                </div>
                <div className="item-text">
                    <h3>2016</h3>
                    <h4>Bachelor's in <br /> Computer Applications<span className="span-color">.</span></h4>
                </div>
            </div>
            <div className="item">
                <div className="item-icon">
                    <SchoolIcon fontSize='large'/>
                </div>
                <div className="item-text">
                    <h3>2019</h3>
                    <h4>Master's in <br /> Computer Applications<span className="span-color">.</span></h4>
                </div>
            </div>
            <div className="item">
                <div className="item-icon">
                    <DeveloperModeSharpIcon fontSize='large'/>
                </div>
                <div className="item-text">
                    <h3>January 2019 - June 2021</h3>
                    <h4>Intern<br /> Cerner<span className="span-color">.</span></h4>
                </div>
            </div>
            <div className="item">
                <div className="item-icon">
                    <SettingsEthernetIcon fontSize='large'/>
                </div>
                <div className="item-text">
                    <h3>July 2019 - March 2021</h3>
                    <h4>Network Engineer<br /> Cerner<span className="span-color">.</span></h4>
                </div>
            </div>
            <div className="item">
                <div className="item-icon">
                    <CodeIcon fontSize='large'/>
                </div>
                <div className="item-text">
                    <h3>April 2021 - Present</h3>
                    <h4>Software Engineer II<br /> Cerner<span className="span-color">.</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Timeline
