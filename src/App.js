import React, { Component } from 'react'
import './App.css'
import InputSearch from './InputSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <InputSearch placeholder="test" testing />
        </header>
      </div>
    )
  }
}

export default App
