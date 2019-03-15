import React, { Component } from 'react';
import './App.css';
import './components/base/navbar.js';
import Navbar from './components/base/navbar.js';
import HomePage from './components/pages/homePage.js';

class App extends Component {
  state = {
    page: 'home'
  }

  click(pageId) {
    console.log(`Page ID inputted: ${pageId}.`);
    let copy = this.state.slice();
    copy.page = pageId;
    this.setState(copy);
  }

  page() {
    switch (this.state.page) {
      case 'home': {
        return <HomePage />
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">
            <h2 className="title">3Harder Web Application</h2>
            <Navbar click={this.click}/>
        </div>
        <div className="pages">{this.page()}</div>
      </div>
    );
  }
}

export default App;
