import React, { Component } from 'react';

import ContactsList from './components/ContactsList/ContactsList';
import AppHeader from './components/AppHeader/AppHeader';

import classes from './assets/scss/App.scss';
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <AppHeader />
        <ContactsList />
      </div>
    );
  }
}

export default App;
