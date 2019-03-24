import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class main extends Component {
    render() {
        return (
            <div className="container">
                <div className="sidebar">
                    <div className="sidebar2">
                        <div className="sidebar_title">
                            <h1>My Blog</h1>
                        </div>
                        <div className="categories widget">
                            <h2>Categories</h2>
                            <ul>
                                {this.props.categoryIndex.map( e => <li><a href={e.url}>{e.category}</a></li> )}
                            </ul>
                        </div>
                        <div className="myself widget">
                            <h2>Introduction</h2>
                            <div className="intro">
                                <p>Knight Rider, a shadowy flight into the dangerous world of a man who does not exist. Michael Knight, a young loner on a crusade to champion the cause of the innocent, the helpless in a world of criminals who operate above the law.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {this.props.diary.map(
                        e => <div className="diary">
                                <h1>{e.title}</h1>
                                <img src={e.picture}/>
                                <div className="paragraph">
                                    {e.paragraph.map( el => <p>{el}</p> )}
                                </div>
                                <div className="date">
                                    {e.date}
                                </div>
                                <img alt="spacer" src="https://1.bp.blogspot.com/-65NY_Xae6lE/WqTIjxpmK2I/AAAAAAAATp4/8w3TYc8EwgQ2xpzZcxLXajNh8uz7a8SEgCLcBGAs/s1600/post-shadow.png"/>
                             </div>)
                    }
                </div>
            </div>
        );
    }
}

export default main;
