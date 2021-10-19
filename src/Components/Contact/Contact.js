import React from 'react'
import Section from '../common/Section/Section';
import ContactCard from '../common/ContactCard/ContactCard';

function Contact() {
    return (
        <div className="container" id="contact">
            <Section sectionHeader="Get in touch" />
            <ContactCard />
        </div>
    )
}

export default Contact;
