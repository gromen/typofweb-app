import React from 'react';

import classes from './../../assets/scss/modules/Header.scss';

const AppHeader = (props) => (
    <header className={classes.Header}>
        <img src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" className={classes.AppLogo} alt="logo" />
        <h1 className={classes.AppTitle}>Lista kontaktów</h1>
        <button className={classes.Button}>Dodaj</button>
    </header>
);

export default AppHeader;