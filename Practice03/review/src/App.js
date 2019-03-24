import React, { Component } from 'react';
import './App.css';
import edit from './edit.svg';
import search from './search.png';
import trash from './trash.png';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="blogHead">
          <div className="blogName">
            Peter's Blog
          </div>
          <div className="titleList">
            <button>Title 1</button>
            <button>Title 2</button>
            <button>Title 3</button>
            <img className="search" align="right" src={search} />
          </div>
        </div>

        <div className="postWrapper">
          <textarea className="post" placeholder="Post here...">
          </textarea>
          <button className="postBtn">
            Post
          </button>
        </div>

        <div className="articleWrapper">
          <div className="articleHead">
            <div className="articleTitle">
              Article Title
            </div>
            <div className="articleAuthor">
              This article is edited by Peter.
              <img className="edit" src={edit} />
              <img className="delete_" src={trash} />
            </div>
          </div>

          <div className="articleContent">
            Hello, World!
          </div>
        </div>

      </div>
    );
  }
}

export default App;
