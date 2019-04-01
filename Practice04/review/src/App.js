import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
var TODOitems = [];

class App extends Component {
  render() {
    return (
      <div>
        <div id="root" className="todo-app__root">
          <Todoapp__header />
          <Todoapp__main />
          <Todoapp__footer />
        </div>
        <script src="main.js" />
      </div>
    );
  }
}

class Todoapp__header extends Component {
  render() {
    return (
      <header className="todo-app__header">
        <h1 className="todo-app__title">todos</h1>
      </header>
    );
  }
}

class Todoapp__item extends Component {
  constructor(props) {
    super(props);
    //this.state = { count: 0 }
  }
  //idi = "node"+{this.props.id};
  checkboxOnClick = () => {
    
  }
  render(){
    return(
      <li className = "todo-app__item" id ="idi">
        <div className = "todo-app__checkbox">
          <input className = "todo-app__checkbox" id = {this.props.id} onlick = {this.checkboxOnClick} type = "checkbox"/>
          <label for = "0"></label>
        </div>
      </li>
    )
  }
}

class Todoapp__main extends Component {
  handleKeyPress = (e) => {
    if(e.key == 'Enter'){
      console.log('enter press here! ')
      console.log(e.target.value)
    }
  }
  render() {
    return (
      <section className="todo-app__main">
        <input
          id="todo-input"
          className="todo-app__input"
          placeholder="What needs to be done?"
          onKeyPress={this.handleKeyPress}
        />
        <ul className="todo-app__list" id="todo-list" />
      </section>
    );
  }
}
class Todoapp__footer extends Component {
  render() {
    return (
      <footer className="todo-app__footer" id="todo-footer">
        <div className="todo-app__total">
          <span id="todo-count">0</span>
          <span>left</span>
        </div>
        <ul className="todo-app__view-buttons">
          <Button onclick={this.alll} id = "All"/>
          <Button onclick={this.active} id = "Active"/>
          <Button onclick={this.completed} id = "Comleted"/>
        </ul>
        <div className="todo-app__clean">
          <button onClick={this.ClearCompleted}>Clear completed</button>
        </div>
      </footer>
    );
  }
  alll = () => {
    console.log("all");
    /*
    state = "all";
    display(state);
    const but_all = document.getElementById("all");
    const but_act = document.getElementById("act");
    const but_com = document.getElementById("com");
    but_all.style["background-color"] = "#f0f0f0";
    but_act.style["background-color"] = "";
    but_com.style["background-color"] = "";
    */
  }
  active = () => {
    console.log("act");
    /*
    state = "active";
    display(state);
    const but_all = document.getElementById("all");
    const but_act = document.getElementById("act");
    const but_com = document.getElementById("com");
    but_all.style["background-color"] = "";
    but_act.style["background-color"] = "#f0f0f0";
    but_com.style["background-color"] = "";
    */
  }
  completed = () => {
    console.log("com");
    /*
    state = "completed";
    display(state);
    const but_all = document.getElementById("all");
    const but_act = document.getElementById("act");
    const but_com = document.getElementById("com");
    but_all.style["background-color"] = "";
    but_act.style["background-color"] = "";
    but_com.style["background-color"] = "#f0f0f0";
    */
  }
  ClearCompleted = () => {
    console.log("cc");
    /*
    var cc = TODOitems.filter(ele => !ele.isComplete);
    //console.log("cc");
    TODOitems = cc;
    for (var i = 0; i < TODOitems.length; i++) {
      TODOitems[i].node.childNodes[0].childNodes[0].id = i;
      TODOitems[i].node.childNodes[0].childNodes[0].setAttribute(
        "onClick",
        "checkboxOnClick(" + String(i) + ")"
      );
      TODOitems[i].node.childNodes[0].childNodes[1].setAttribute("for", i);
      TODOitems[i].node.childNodes[2].setAttribute(
        "onclick",
        "xxOnClick(" + String(i) + ")"
      );
      TODOitems[i].node.id = "node" + String(i);
    }
    display(state);
    var all_count = document.getElementById("all_num");
    all_count.innerHTML = TODOitems.length;
    var com_count = document.getElementById("com_num");
    com_count.innerHTML = "0";
    */
  }
}

class Button extends Component {
  constructor(props) {
    super(props);
    //this.state = { count: 0 }
  }
  render() {
    return (
      <button onClick={this.props.onclick} name = {this.props.id}>
        <span>{this.props.id} (</span>
        <span id={this.props.id}>0</span>
        <span>)</span>
      </button>
    );
  }
  


}

export default App;
