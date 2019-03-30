import React from 'react';

import CalcButton from '../components/CalcButton';

const initialState = {
  number: 0,
  mode: "num", //num, oper
  operator: "empty",
  previousNum: 0,
  afterEqual: false,
  afterEqualNumber: 0,
};

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  resetState() {
    this.setState(initialState);
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  clickNumber = (num) => {
    if(this.state.mode === "num") {
      if(this.state.afterEqual) {
        this.setState((state) => ({
          number: num,
        }));
        return;
      }
      this.setState((state) => ({
        number: state.number*10+num,
      }));
    } else if(this.state.mode === "oper") {
      this.setState((state) => ({
        mode: "cal",
        number: num,
      }));
    } else if(this.state.mode === "cal") {
      this.setState((state) => ({
        number: state.number*10+num,
      }));
    }

  };

  clickOperator = (opera) => {
    this.setState({afterEqual: false});
    // num
    if(this.state.mode === "num") {
      if(opera === "=") {
        this.setState({afterEqual: true});
        if(this.state.operator === "+") {
          this.setState((state) => ({
            number: state.number + state.afterEqualNumber,
            mode: "num",
          }));
        } else if(this.state.operator === "-") {
          this.setState((state) => ({
            number: state.number - state.afterEqualNumber,
            mode: "num",
          }));
        } else if(this.state.operator === "x") {
          this.setState((state) => ({
            number: state.number * state.afterEqualNumber,
            mode: "num",
          }));
        } else if(this.state.operator === "÷") {
          this.setState((state) => ({
            number: state.number / state.afterEqualNumber,
            mode: "num",
          }));
        }

        return;
      }

      this.setState((state) => ({
        previousNum: state.number,
      }));
      this.setState((state) => ({
        operator: opera,
      }));
      this.setState({mode: "oper"});
      //oper
    } else if(this.state.mode === "oper") {
      this.setState((state) => ({
        operator: opera,
      }));
      // cal
    } else if(this.state.mode === "cal") {
      if(opera === "=") {
        this.setState({afterEqual: true});
        if(this.state.operator === "+") {
          this.setState((state) => ({
            number: state.previousNum + state.number,
            mode: "num",
            afterEqualNumber: state.number,
          }));
        } else if(this.state.operator === "-") {
          this.setState((state) => ({
            number: state.previousNum - state.number,
            mode: "num",
            afterEqualNumber: state.number,
          }));
        } else if(this.state.operator === "x") {
          this.setState((state) => ({
            number: state.previousNum * state.number,
            mode: "num",
            afterEqualNumber: state.number,
          }));
        } else if(this.state.operator === "÷") {
          this.setState((state) => ({
            number: state.previousNum / state.number,
            mode: "num",
            afterEqualNumber: state.number,
          }));
        }
        return;
      } 

      if(this.state.operator === "+") {
        this.setState((state) => ({
          number: state.previousNum + state.number,
          mode: "oper",
          operator: opera,
          previousNum: state.previousNum + state.number,
        }));
      } else if(this.state.operator === "-") {
        this.setState((state) => ({
          number: state.previousNum - state.number,
          mode: "oper",
          operator: opera,
          previousNum: state.previousNum - state.number,
        }));
      } else if(this.state.operator === "x") {
        this.setState((state) => ({
          number: state.previousNum * state.number,
          mode: "oper",
          operator: opera,
          previousNum: state.previousNum * state.number,
        }));
      } else if(this.state.operator === "÷") {
        this.setState((state) => ({
          number: state.previousNum / state.number,
          mode: "oper",
          operator: opera,
          previousNum: state.previousNum / state.number,
        }));
      }
    }
  };

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.number}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={() => this.resetState()}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.clickOperator("÷")}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.clickNumber(7)}>7</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.clickNumber(8)}>8</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.clickNumber(9)}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.clickOperator("x")}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.clickNumber(4)}>4</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.clickNumber(5)}>5</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.clickNumber(6)}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.clickOperator("-")}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.clickNumber(1)}>1</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.clickNumber(2)}>2</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.clickNumber(3)}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.clickOperator("+")}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={() => this.clickNumber(0)}>0</CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.clickOperator("=")}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
