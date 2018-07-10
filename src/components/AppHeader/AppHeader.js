import React from 'react';

import styles from './Header.scss';

const AppHeader = (props) => (
    <header className={styles.header + ' ui fixed menu'}>
        <div className="header item">
            <img src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" className={styles.logo} alt="logo" />
            <h1 className={styles.title}>Lista kontaktów</h1>
        </div>
        <div className="header item">
            <button className={styles.btn + ' ui button'} onClick={props.clickedBtn}>Dodaj</button>
        </div>
    </header>
);

export default AppHeader;