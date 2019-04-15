import React, { Component } from 'react';
import Background from "./img/home-bg.jpg";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header title="HELLO AMIGOS" subtitle="welcome to my page" background={Background} />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-preview">
                <a href="#">
                  <h2 className="post-title">
                    Man must explore, and this is exploration at its greatest
                  </h2>
                  <h3 className="post-subtitle">
                    Problems look mighty small from 150 miles up
                  </h3>
                </a>
                <p className="post-meta">Posted by
                  <a href="#"> BELONG </a>
                  on September 24, 2018</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-preview">
                <a href="#">
                  <h2 className="post-title">
                   First ever black hole image released
                  </h2>
                  <h3 className="post-subtitle">
                    Astronomers have taken the first ever image of a black hole, which is located in a distant galaxy.
                  </h3>
                </a>
                <p className="post-meta">Posted by
                  <a href="#"> BCC </a>
                  on April 10, 2019</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <Footer/>
      </div>
    );
  }
}
export default Home;