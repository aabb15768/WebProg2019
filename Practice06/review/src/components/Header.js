import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    	<header className="masthead" style={{backgroundImage: `url(${this.props.background})`}}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{this.props.title}</h1>
                <span className="subheading">{this.props.subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;