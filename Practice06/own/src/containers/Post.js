import React from 'react'
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

function ChoosePostMode(props) {
    if(props.content === undefined) {
        return(
            <div>
                <p className="card-text">{props.carText}<br/>...</p>
                <NavLink className="btn btn-primary" to={"/posts/"+props.index} onClick={() => props.setNumber(props.index)}>Read More &rarr;</NavLink>
            </div>
        );
    } else {
        return(
            <div>
                {props.content}
            </div>
        );
    }
}

class Post extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="card mb-4">
                <img className="card-img-top" src={this.props.image.src} alt={this.props.image.alt}/>
                <div className="card-body">
                    <h2 className="card-title">{this.props.title}</h2>
                    <ChoosePostMode setNumber={this.props.setNumber} carText={this.props.carText} content={this.props.content} index={this.props.index}></ChoosePostMode>
                </div>
                <div className="card-footer text-muted">
                    Posted on {this.props.date} by 
                    <a href="#"> {this.props.author}</a>
                </div>
            </div>       
        );
    }
}

export default Post;