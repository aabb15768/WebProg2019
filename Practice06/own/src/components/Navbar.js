import React from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

export default ({navItems}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/home">Lee's Blog</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {navItems.map((ele, key) =>(
                            <li className="nav-item" key={key}>
                                <NavLink className="nav-link"to={"/"+ele.name}>{ele.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Switch>
                <Redirect from="/home" to="/" />
            </Switch>
        </nav>        
    );
};