import React from 'react'
import './contactcard.css'
import SocailIcons from '../Socials/SocailIcons';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';

function ContactCard() {
    return (
        <div className="contactcard">
            <div className="contact-info">
                <div className="contact-icon">
                    <RoomIcon />
                </div>
                <div className="contact-data">
                    <h5>Bengaluru, India.</h5>
                </div>
            </div>
            <div className="contact-info">
                <div className="contact-icon">
                    <PhoneIcon />
                </div>
                <div className="contact-data">
                    <h5>+91-8310133967</h5>
                </div>
            </div>
            <SocailIcons />
        </div>
    )
}

export default ContactCard
