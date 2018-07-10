import React from 'react';


import ContactItem from './ContactItem/ContactItem';


const ContactsList = (props) => props.contactItems.map((contact, index) => {
    return <ContactItem
            key={index}
            name={contact.name}
            department={contact.department}
            login={contact.login}/>
    }
);

export default ContactsList;