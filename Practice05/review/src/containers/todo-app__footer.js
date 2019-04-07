// In containers/todo-app__footer.js
import React, { Component } from 'react'

class TODO_FOOTER extends React.Component
{
    //this.handleInput = this.handleInput.bind(this);
    render()
    {
        return (
            <footer className = "todo-app__footer" id = "todo-footer">
                <div className = "todo-app__total">
                    <p id = "todo-total">0 left</p>
                </div>
                <ul className = "todo-app__view-buttons">
                    <button type = "button">All</button>
                    <button type = "button">Active</button>
                    <button type = "button">Completed</button>
                </ul>
                <div className = "todo-app__clean">
                    <button type = "button">Clear completed</button>
                </div>
            </footer>
        );
    }
}

export default TODO_FOOTER;