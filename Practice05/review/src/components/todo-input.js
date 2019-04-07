// In components/todo-input.js
import React, { Component } from 'react'
class TODO_INPUT extends React.Component
{
    render()
    {
        return (
            <input 
              className = "todo-app__input" 
              id = "todo-input" 
              placeholder = "What needs to be done?"
              onKeyPress = {this.props.input_func}>
            </input>
        );
    }
}

export default TODO_INPUT;