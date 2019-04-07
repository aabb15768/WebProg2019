import TODO_MAIN from "../containers/todo-app__main.js"
import TODO_HEADER from "../containers/todo-app__header.js"
import TODO_FOOTER from "../containers/todo-app__footer.js"
import React, { Component } from 'react'

class ROOT extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.state = 
        {
            todo_list_arr: [
                    {content: "yoyoyo", deleted: 0, done: 0},
                    {content: "yoyoyo1", deleted: 0, done: 0},
                    {content: "yoyoyo2", deleted: 0, done: 0} ]
        }
    }
    setNumber = function(value)
    {
        //this.state.todo_item_arr.push(value);
        //this.setState({todo_item_arr: this.state.todo_item_arr});
    }
    handleInput = e => {
        if (e.key === "Enter" && e.target.value !== "") 
        {
            console.log(e.target.value);
            this.state.todo_list_arr.push({content: e.target.value, deleted: 0, done: 0});
            console.log(this.state.todo_list_arr);
            //this.setNumber(e.target.value);
            this.setState({ todo_item_arr: this.state.todo_list_arr });
            e.target.value = '';
        }
    };

    render()
    {
        return (
            <div id = "root" className = "todo-app__root">
                <TODO_HEADER className = "todo-app__header"/>
                <TODO_MAIN className = "todo-app__main" 
                           id = "todo-app__main"
                           todo_item_arr = {this.state.todo_list_arr}
                           handleInput = {this.handleInput}/>
                <TODO_FOOTER className = "todo-app__footer" id = "todo-footer"/>
            </div>
        )
    }
}
export default ROOT;