import React, { Component } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'

export default class Calculator extends Component {
  state = {
    result: '',
    factor1: 0,
    factor2: 0
  }

  calculate() {
    this.setState({
      result: this.state.factor1 * this.state.factor2,
      factor1: 0,
      factor2: 0
    })
  }

  render() {
    return (
      <React.Fragment>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          data-test="rotateLogo"
        />
        <StyledInput
          data-test="factor1"
          type="number"
          onChange={el => this.setState({ factor1: el.target.value })}
          value={this.state.factor1}
        />
        <Signs>X</Signs>
        <StyledInput
          data-test="factor2"
          type="number"
          onChange={el => this.setState({ factor2: el.target.value })}
          value={this.state.factor2}
        />
        <Signs>=</Signs>
        <StyledInput
          data-test="result"
          type="text"
          disabled
          placeholder={this.props.placeholder}
          onChange={el => this.setState({ result: el.target.value })}
          value={this.state.result}
        />
        <CalulateButton onClick={() => this.calculate()}>
          Calculate & Reset
        </CalulateButton>
      </React.Fragment>
    )
  }
}

const CalulateButton = styled.button`
  margin-top: 20px;
  height: 60px;
  width: 180px;
  border-radius: 10px;
  font-size: 18px;
`

const StyledInput = styled.input`
  height: 20px;
  width: 160px;
  border-radius: 10px;
  font-size: 14px;
  padding: 4px;
`

const Signs = styled.div`
  margin: 10px 0;
  height: 20px;
  font-size: 14px;
`
