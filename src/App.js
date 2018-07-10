import React, { Component } from 'react';

import ContactsList from './components/ContactsList/ContactsList';
import AppHeader from './components/AppHeader/AppHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <main className="ui main text container">
          <ContactsList />
        </main>
      </div>
    );
  }
}

export default App;
