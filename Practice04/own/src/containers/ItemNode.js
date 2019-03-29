import React from 'react';
import logo from './img/x.png';

class ItemNode extends React.Component {
    checkboxListener = event => {
        this.props.setActiveNum();
        let id = event.target.id;
        let child = event.target.parentElement.parentElement.childNodes[1];
        if (event.target.checked) {
            this.props.itemArr[id].isComplete = true;
            child.style["textDecoration"] = "line-through";
            child.style["opacity"] = 0.5;
        } else {
            this.props.itemArr[id].isComplete = false;
            child.style["textDecoration"] = "none";
            child.style["opacity"] = 1;
        }
    };

    xbuttonListener = event => {
        var targetID = event.target.parentElement.childNodes[0].childNodes[0].id;
        this.props.itemArr.splice(targetID, 1);
        this.props.setItemArr();
    }

    render() {
        return(
            <li className="todo-app__item">
                <div className="todo-app__checkbox">
                    <input type="checkbox" id={this.props.itemArr.length-1} onClick={this.checkboxListener}/>
                    <label htmlFor={this.props.itemArr.length-1}></label>
                </div>
                <h1 className="todo-app__item-detail">{this.props.itemName}</h1>
                <img className="todo-app__item-x" src={logo} alt="X button" onClick={this.xbuttonListener}/>
            </li>
        );
    };
}

export default ItemNode;