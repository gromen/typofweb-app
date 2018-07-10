import React from 'react';

import styles from './../ContactsList.scss';

const ContactItem = ({login, name, department}) => {
    const imgURL = `https://api.adorable.io/avatars/55/${login}.png`;

    return (

        <li className={styles.item + ' item'}>
            <img className="ui mini rounded image" src={imgURL} alt={login} />
            <span className="content">
                <h4 className="header">{name}</h4>
                <div className="description">{department}</div>
            </span>
        </li>
    )
};

export default ContactItem;