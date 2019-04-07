// In containers/todo-app__main.js
import React, { Component } from 'react'
import TODO_INPUT from '../components/todo-input.js'
import TODO_LIST from "../components/todo-list.js"

class TODO_MAIN extends React.Component
{
    //this.handleInput = this.handleInput.bind(this);
    render()
    {
        
        return (
            <div className = "todo-app__main" id = "todo-app__main">
                <TODO_INPUT input_func = {this.props.handleInput}/>
                <TODO_LIST todo_item_arr = {this.props.todo_item_arr}/>
            </div>
        );
    }
}

export default TODO_MAIN;