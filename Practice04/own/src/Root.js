import React from 'react';
import Header from './components/Header.js'
import InputSection from './components/InputSection.js';
import List from './containers/List.js';
import ItemNode from './containers/ItemNode.js';

class Root extends React.Component {
  headerText = 'todos';

  constructor(props) {
    super(props);
    this.state = {
      statusFlag: "all",
      itemArr: [],
      activeNum: 0,
    }
  };

  componentDidMount() {
    document.getElementById("all").style.border = "1px solid rgb(170, 170, 170)";
    document.getElementsByClassName("todo-app__footer")[0].style.display = "none";
  }

  componentDidUpdate() {

    var nodes = document.getElementsByClassName("todo-app__checkbox");
    if(nodes !== undefined){
      for(var i = 0; i < nodes.length; i++) {
        nodes[i].childNodes[0].setAttribute("id", i);
        nodes[i].childNodes[1].setAttribute("for", i);
      }
    }

    if (this.state.itemArr.length === 0) {
      document.getElementsByClassName("todo-app__footer")[0].style.display = "none";
    } else {
      document.getElementsByClassName("todo-app__footer")[0].style.display = "flex";
    }

    if (this.state.statusFlag === "all") {
      document.getElementById("all").style.border = "1px solid rgb(170, 170, 170)";
      document.getElementById("active").style.border = "1px solid transparent";
      document.getElementById("completed").style.border = "1px solid transparent";
    } else if (this.state.statusFlag === "active") {
      document.getElementById("active").style.border = "1px solid rgb(170, 170, 170)";
      document.getElementById("all").style.border = "1px solid transparent";
      document.getElementById("completed").style.border = "1px solid transparent";
    } else if (this.state.statusFlag === "completed") {
      document.getElementById("completed").style.border = "1px solid rgb(170, 170, 170)";
      document.getElementById("active").style.border = "1px solid transparent";
      document.getElementById("all").style.border = "1px solid transparent";
    }

    for(let i = 0; i < this.state.itemArr.length; i++) {
      if(this.state.statusFlag === "all") {
        document.getElementById(i).parentNode.parentNode.style.display = "flex";
      } else if(this.state.statusFlag === "active") {
        if(this.state.itemArr[i].isComplete === true) {
          document.getElementById(i).parentNode.parentNode.style.display = "none";
        } else {
          document.getElementById(i).parentNode.parentNode.style.display = "flex";
        }
      } else if(this.state.statusFlag === "completed") {
        if(this.state.itemArr[i].isComplete === false) {
          document.getElementById(i).parentNode.parentNode.style.display = "none";
        } else {
          document.getElementById(i).parentNode.parentNode.style.display = "flex";
        }
      }
    }
  
    for(let i = 0; i < this.state.itemArr.length; i++) {
      let child = document.getElementById(i).parentNode.parentNode.childNodes[1];
      if(this.state.itemArr[i].isComplete === true) {
        child.style["textDecoration"] = "line-through";
        child.style["opacity"] = 0.5;
        document.getElementById(i).checked = true;
      } else {
        child.style["textDecoration"] = "none";
        child.style["opacity"] = 1;
        document.getElementById(i).checked = false;
      }
    }

    let isDisplay = false;
    for (let i = 0; i < this.state.itemArr.length; i++) {
        if (this.state.itemArr[i].isComplete) {
            isDisplay = true;
            break;
        }
    }
    if (isDisplay) {
        document.getElementById("clearCompleted").style.display = "flex";
    } else {
        document.getElementById("clearCompleted").style.display = "none";
    }
  }

  handleInput = event => {
    if (event.key === "Enter" && event.target.value !== "") {
      // Text displayed in todo item
      let textDisplayedInItem = event.target.value;
      const itemNode = <ItemNode itemName={textDisplayedInItem} itemArr={this.state.itemArr} setItemArr={this.setItemArr} setActiveNum={this.setNum}/>;
      const newItem = {
          node: itemNode,
          isComplete: false,
      };
      this.setState(
        state => {
          const list = state.itemArr.push(newItem);
          return {
            list,
          };
        }
      );      
      event.target.value = "";
    }
  };

  countNotCompleted = () => {
    let count = 0;
    for(let i = 0; i < this.state.itemArr.length; i++) {
      if(this.state.itemArr[i].isComplete === false) {
        count++;
      }
    }
    return count;
  };

  setNum = () => {
    this.setState(
      state => {
        const num = this.countNotCompleted();
        return {
          num,
        };
      }
    );
  };

  setItemArr = () => {
    this.setState(
      state => {
        const list = state.itemArr;
        return {
          list,
        };
      }
    )
  };

  setStatus = (buttonStatus) => {
    this.setState({statusFlag: buttonStatus});
  };

  clearCompleted = () => {
    for (let i = 0; i < this.state.itemArr.length; i++) {
        if (this.state.itemArr[i].isComplete) {
          this.state.itemArr.splice(i, 1);
          i--;
        }
    }
    this.setItemArr();
  };

  render() {
    return (
      <div id="root" className="todo-app__root">
        <Header headerText ={this.headerText}/>
        <InputSection onKeyPress={this.handleInput}/>
        <List itemArr={this.state.itemArr}/>
        <footer className="todo-app__footer" id="todo-footer">
          <div className="todo-app__total">
            <p id="todo-app__itemCount">{this.countNotCompleted()} left</p>
          </div>
          <ul className="todo-app__view-buttons">
            <button onClick={() => this.setStatus("all")} id="all">All</button>
            <button onClick={() => this.setStatus("active")} id="active">Active</button>
            <button onClick={() => this.setStatus("completed")} id="completed">Completed</button>
          </ul>
          <div className="todo-app__clean">
            <button onClick={() => this.clearCompleted()} id="clearCompleted">Clear completed</button>
          </div>
        </footer>
      </div>
    );
  }
}

export default Root;
