import React, { Component } from 'react';
import './App.css';
import './components/base/navbar.js';
import Navbar from './components/base/navbar.js';
import HomePage from './components/pages/homePage.js';
import NewsfeedPage from './components/pages/newsfeedPage.js';
import TicTacToePage from './components/pages/ticTacToePage.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'tic-tac-toe'
    }
  }

  click(pageId) {
    console.log(`Page ID inputted: ${pageId}.`);
    let copy = this.state;
    copy.page = pageId;
    this.setState(copy);
  }

  page() {
    switch (this.state.page) {
      case 'home': {
        return <HomePage />
      }

      case 'newsfeed': {
        return <NewsfeedPage />
      }

      case 'tic-tac-toe': {
        return <TicTacToePage />
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">
            <h2 className="title">3Harder Web Application</h2>
            <Navbar
              homeClick={() => this.click('home')}
              newsfeedClick={() => this.click('newsfeed')}
              ticTacToeClick={() => this.click('tic-tac-tor')}
              staffClick={() => this.click('staff')}
              productsClick={() => this.click('products')}
            />
        </div>
        <div className="pages">{this.page()}</div>
      </div>
    );
  }
}

export default App;
