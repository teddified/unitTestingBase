import React, { Component } from 'react'
import logo from './logo.svg'

export default class InputSearch extends Component {
  state = {
    search: ''
  }

  changePlaceholder() {
    this.setState({ search: 'hello' })
  }

  render() {
    return (
      <React.Fragment>
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="text"
          placeholder={this.props.placeholder}
          onChange={el => this.setState({ search: el.target.value })}
          value={this.state.search}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.changePlaceholder()}>hallo</button>
      </React.Fragment>
    )
  }
}
