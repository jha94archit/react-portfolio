import React from 'react'
import Section from '../common/Section/Section';
import ContactCard from '../common/ContactCard/ContactCard';
import { contact_data } from '../../Data/contact_data';

function Contact() {
    return (
        <div className="container" id="contact">
            <Section sectionHeader="Get in touch" sectionContent={contact_data.content} />
            <ContactCard />
        </div>
    )
}

export default Contact;
