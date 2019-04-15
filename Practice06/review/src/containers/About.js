import React, { Component } from 'react';
import Background from "./img/about-bg.jpg";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

class About extends Component {
  render() {
    return (
      <div>
        <Header title="ABOUT ME" subtitle="just kidding" background={Background} />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p>Hi, I'm Belong, a third grader who studying in National Taiwan University and major in Eletronical Engineering.</p>
            </div>
          </div>
        </div>
        <hr/>
        <Footer/>
      </div>
    );
  }
}
export default About;