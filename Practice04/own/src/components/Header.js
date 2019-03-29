import React from 'react';

export default ({headerText}) => {
    return(
        <header className="todo-app__header">
            <h1 className="todo-app__title">{headerText}</h1>
        </header>
    );
};