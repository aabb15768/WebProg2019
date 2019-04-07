// In containers/todo-app__header.js
import React, { Component } from 'react'

class TODO_HEADER extends React.Component
{
    //this.handleInput = this.handleInput.bind(this);
    render()
    {
        return (
            <header className = "todo-app__header">
                <h1 className = "todo-app__title">Todos</h1>
            </header>
        );
    }
}

export default TODO_HEADER;