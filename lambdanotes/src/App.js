import React, { Component } from 'react';
import './App.css';

import SideMenu from './components/SideMenu/SideMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideMenu />
      </div>
    );
  }
}

export default App;