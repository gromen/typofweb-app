import React, { Component } from 'react';

import './App.css';
import ContactsList from './components/ContactsList/ContactsList';
import AppHeader from './components/AppHeader/AppHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <ContactsList />
      </div>
    );
  }
}

export default App;
