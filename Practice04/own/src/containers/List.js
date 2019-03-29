import React from 'react';

class List extends React.Component {
    createItem = () => {
        var itemList = [];  
        for(var i = 0; i < this.props.itemArr.length; i++) {
            itemList.push(this.props.itemArr[i].node);
        }
        return itemList;
    };

    render() {
        return(
            <ul className="todo-app__list" id="todo-list">
                {this.createItem().map((element, index) => {
                    return <div key={'mykey' + index}>{element}</div>;
                })}
            </ul>
        );
    };
}

export default List;