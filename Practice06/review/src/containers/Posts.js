import React, { Component } from 'react';
import Background from "./img/post-bg.jpg";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import {NavLink} from "react-router-dom";

class Posts extends Component {
  render() {
  	let id = [0,1];
  	let titlebar = ["Man must explore, and this is exploration at its greatest"," First ever black hole image released"];
  	let subtitlebar = ["Problems look mighty small from 150 miles up","Astronomers have taken the first ever image of a black hole, which is located in a distant galaxy"];
    let aurthor = ["Belong","BBC"];
    let date = ["September 24, 2018","April 10, 2019"];

    const postlist = id.map(i => (
    	<div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-preview">
                <NavLink to={"/posts/" + i}>
                  <h2 className="post-title">
                    {titlebar[i]}
                  </h2>
                  <h3 className="post-subtitle">
                    {subtitlebar[i]}
                  </h3>
                </NavLink>
                <p className="post-meta">Posted by
                  <a href="#"> {aurthor[i]} </a>
                  on {date[i]}</p>
              </div>
            </div>
          </div>
        </div>
    ));

    return (
      <div>
        <Header title="POSTS WALL" subtitle="click & check it" background={Background} />
        {postlist}
        <hr/>
        <Footer/>
      </div>
    );
  }
}
export default Posts;