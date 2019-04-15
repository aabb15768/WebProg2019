import React, { Component } from 'react';
import Navbar from "./../components/Navbar";
import About from "./../containers/About";
import Home from "./../containers/Home";
import Posts from "./../containers/Posts";
import Postsrender from "./../containers/Postsrender"
import Contact from "./../containers/Contact";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:id?" component={Postsrender}/>
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
          <Redirect from="/home" to="/" />
        </Switch>
      </div>
    );
  }
}
export default Main;