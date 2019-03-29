import React from 'react'
export default ({onKeyPress}) => {
    return(
        <section className="todo-app__main">
            <input placeholder="What needs to be done?" className="todo-app__input" id="todo-input" onKeyPress={onKeyPress}/>
        </section>
    );
};
