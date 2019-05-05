import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user_input: "",
      result: 0
    }

    this.handleClick = this.handleClick.bind(this);
    this.backspace = this.backspace.bind(this);
    this.calculate = this.calculate.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick(event) {
    const input = event.target.name
    if (input === "CE") {
      this.backspace();
    } 
    else if (input === "C") {
      this.reset();
    }
    else if (input === "=") {
      this.calculate();
    }
    else {
      this.setState({
        user_input: this.state.user_input + input,
      })
    }
  }

  calculate(){
    const _result = (eval(this.state.user_input) || "" ) + "";
    this.setState({
      result: _result
    })
  }

  backspace() {
    this.setState({
      user_input: this.state.user_input.slice(0, -1)
    })
  };

  reset(){
  this.setState({
    user_input: "",
      result: 0
  })
  }

  render() {
    const { result, user_input } = this.state;
    return (
      <div id="calculator">
        
          <div className="title">
            REACT CALCULATOR
          </div>
          <div id="box">
          <div className="user-input">
            <p>{user_input}</p>
          </div>
          <div className="result text-right">
            <p>{result}</p>
          </div>

          <div className="button">
            <button name="(" onClick={this.handleClick}>(</button>
            <button name="CE" onClick={this.handleClick}>CE</button>
            <button name=")" onClick={this.handleClick}>)</button>
            <button name="C" onClick={this.handleClick}>C</button><br />


            <button name="1" onClick={this.handleClick}>1</button>
            <button name="2" onClick={this.handleClick}>2</button>
            <button name="3" onClick={this.handleClick}>3</button>
            <button name="+" onClick={this.handleClick}>+</button><br />


            <button name="4" onClick={this.handleClick}>4</button>
            <button name="5" onClick={this.handleClick}>5</button>
            <button name="6" onClick={this.handleClick}>6</button>
            <button name="-" onClick={this.handleClick}>-</button><br />

            <button name="7" onClick={this.handleClick}>7</button>
            <button name="8" onClick={this.handleClick}>8</button>
            <button name="9" onClick={this.handleClick}>9</button>
            <button name="*" onClick={this.handleClick}>x</button><br />


            <button name="." onClick={this.handleClick}>.</button>
            <button name="0" onClick={this.handleClick}>0</button>
            <button name="=" onClick={this.handleClick}>=</button>
            <button name="/" onClick={this.handleClick}>÷</button><br />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
