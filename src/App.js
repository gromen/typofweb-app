import React, { Component } from 'react';

import ContactsList from './components/ContactsList/ContactsList';
import styles from './components/ContactsList/ContactsList.scss';
import AppHeader from './components/AppHeader/AppHeader';

class App extends Component {
  state = {
    contactItems: [
      { name: 'Lena', department: 'Javascript Developer', login: 'typeofweb1' },
      { name: 'Brian', department: 'Human Resources', login: 'typeofweb2' },
      { name: 'Rick', department: 'QA', login: 'typeofweb3' },
    ]
  }

  addContactHandler = () => {
    const items = [...this.state.contactItems];

    items.push(items[Math.floor((Math.random() * 3))]);

    this.setState({
      contactItems: items
    })
  }

  render() {
    return (
      <div className="App">
        <AppHeader
          clickedBtn={this.addContactHandler}/>

        <main className="ui main text container">
          <ul className={styles.contacts + ' ui relaxed divided list selection'}>
            <ContactsList
              contactItems={this.state.contactItems}/>
          </ul>
        </main>

      </div>
    );
  }
}

export default App;
