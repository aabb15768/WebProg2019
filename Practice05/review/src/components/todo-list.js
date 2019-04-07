// In components/todo-list.js
import React, { Component } from 'react'
class TODO_LIST extends React.Component
{
    render()
    {
        return (
            <ul className = "todo-app__list" id = "todo-list">
                {this.props.todo_item_arr.map(
                  e => 
                  <li className="todo-app__item" style={{opacity: 1}}>
                    <div className="todo-app__checkbox">
                      <input type="checkbox" id="2"/>
                      <label htmlFor="2"></label>
                    </div>
                    <h1 className="todo-app__item-detail">{e.content}</h1>
                    <img className="todo-app__item-x" src="../x.png"/>
                  </li>
                ) }
            </ul>
        );
    }
}

export default TODO_LIST;