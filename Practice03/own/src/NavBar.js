import React, { Component } from 'react';

class NavBar extends React.Component {
    render() {
        return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#jump1">芷誼</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#jump2">台灣</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#jump3">東京</a>
                </li>
            </ul>
            <div>
                <form className="form-inline " action="/action_page.php">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
        );
    }
}

export default NavBar;
