import React from 'react'
import './social-icons.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function SocailIcons() {
    return (
        <div className='social-icons'>
            <div className="icon">
                <a href="https://github.com/jha94archit">
                    <GitHubIcon fontSize="medium"/>
                </a>
            </div>
            <div className="icon">
                <a href="https://www.linkedin.com/in/archit-jha-548a28150/">
                    <LinkedInIcon fontSize="large"/>
                </a>
            </div>
        </div>
    )
}

export default SocailIcons
