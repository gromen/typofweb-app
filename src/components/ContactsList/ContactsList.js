import React from 'react';

import styles from './ContactsList.scss';

import ContactItem from './ContactItem/ContactItem';


const ContactsList = () => (
    <ul className={styles.contacts + ' ui relaxed divided list selection'}>
        <ContactItem
            name="Lena"
            department="JavaScript Developer"
            login="typeofweb1"/>

        <ContactItem
            name="Brian"
            department="Human Resources"
            login="typeofweb2"/>

        <ContactItem
            name="Rick"
            department="QA"
            login="typeofweb3"/>
    </ul>
);

export default ContactsList;