import React, { Component } from 'react'
import './App.css'
import Calculator from './Calculator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Calculator placeholder="Result" disabled />
        </header>
      </div>
    )
  }
}

export default App
