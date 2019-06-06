import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

import {
  POSTS_QUERY,
  CREATE_POST_MUTATION,
  POSTS_SUBSCRIPTION,
  USERS_QUERY,
} from '../../graphql'
import Post from '../../components/Post/Post'
import classes from './App.module.css'
import { NONAME } from 'dns';

let unsubscribe = null

class App extends Component {
  state = {
    formTitle: '',
    formBody: '',
    authorIDSelected: 0,
    authorsList: [],
    postsList: [],
  }

  componentWillMount() {
    this.fetchData();
    this.fetchPostData();
  }

  fetchData = () => {
    this.setState({ loading: true }, () => {
      fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query {
            users {
              id
              name
            }
          }`,
        }),
      })
        .then(response => {
          return response.json()
        })
        .then(responseAsJson => {
          responseAsJson.data.users.map((user) => user["isOpen"] = false);
          this.setState({ authorsList: responseAsJson.data.users });
        })
    })
  }

  fetchPostData = () => {
    this.setState({ loading: true }, () => {
      fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query {
            posts {
              title
              body
              author {
                name
              }
              published
            }
          }`,
        }),
      })
        .then(response => {
          return response.json()
        })
        .then(responseAsJson => {
          this.setState({ postsList: responseAsJson.data.posts });
        })
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()

    const { formTitle, formBody } = this.state

    if (!formTitle || !formBody) return

    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        authorId: this.state.authorIDSelected
      }
    })

    this.setState({
      formTitle: '',
      formBody: ''
    })
  }

  handleAuthorSelected = event => {
    this.setState({authorIDSelected: event.target.value});
  }

  computePostNum = (authorName) => {
    var count = 0;
    this.state.postsList.map((post) => {
      if(post.author.name === authorName) {
        count = count +1;
      }
    })
    return count;
  }

  openOnclick = (event) => {
    if(this.state.authorsList[event.target.id].isOpen === false) {
      var selectPost = "post"+event.target.id;
      event.target.innerHTML = "close";
      document.getElementById(selectPost).style.display = 'block';
      this.state.authorsList[event.target.id].isOpen = true;
    } else {
      var selectPost = "post"+event.target.id;
      event.target.innerHTML = "open";
      document.getElementById(selectPost).style.display = 'none';
      this.state.authorsList[event.target.id].isOpen = false;
    }
  }

  render() {
    return (
      <div className="container m-5">
        <div className="row d-flex justify-content-center big-header">
          <h1>Modern GraphQL Tutorial</h1>
        </div>
        <hr/>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6 col1 d-flex justify-content-center row-left">
              <div className="row">
                <Mutation mutation={CREATE_POST_MUTATION}>
                  {createPost => {
                    this.createPost = createPost

                    return (
                      <form onSubmit={this.handleFormSubmit}>
                        <h1 align="center">Deliever Post</h1>
                        <hr/>
                        <div className="form-group">
                          <label htmlFor="author">
                            Author
                          </label>
                          <Query query={USERS_QUERY}>
                            {({ loading, error, data, subscribeToMore }) => {
                              if (loading) return <p>Loading...</p>
                              if (error) return <p>Error :(((</p>

                              return(
                                <select className="form-control" defaultValue="default" onChange={this.handleAuthorSelected}>
                                  <option value="default" hidden>Choose Author</option>
                                  {
                                    data.users.map((data, id) => <option value={data.id} key={id}>{data.name}</option>)
                                  }
                                </select>
                              )
                            }}
                          </Query>
                        </div>
                        <div className="form-group">
                          <label htmlFor="title">
                            Title
                          </label>
                          <input
                            name="title"
                            value={this.state.formTitle}
                            id="title"
                            placeholder="Post title..."
                            className="form-control"
                            onChange={e =>
                              this.setState({ formTitle: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="body">Body</label>
                          <input
                            type="textarea"
                            name="body"
                            value={this.state.formBody}
                            className="form-control"
                            id="body"
                            placeholder="Post body..."
                            onChange={e =>
                              this.setState({ formBody: e.target.value })
                            }
                          />
                        </div>
                        <button type="submit" color="primary">
                          Post
                        </button>
                      </form>
                    )
                  }}
                </Mutation>
              </div>
          </div>
          {/* <div className="container col-sm-6 col2 d-flex justify-content-center row-right"> */}
          <div className="container col-sm-6 row-right">
            <h1 align="center">POSTS</h1>
            <hr/>
            {this.state.authorsList.map((user, id) => (
                <div key={id}>
                  <div className="row self-row">
                    <div className="col-md-4">
                      {user.name}
                    </div>
                    <div className="col-md-4 post-num">
                      <span>post: {this.computePostNum(user.name)}</span>
                    </div>
                    <div className="col-md-4 float-right">
                      <button className="btn float-right" id={id} onClick={(e) => this.openOnclick(e)}>open</button>
                    </div>
                  </div>
                  <div id={`post${id}`} style={{display: 'none' }}>
                    <Query query={POSTS_QUERY}>
                      {({ loading, error, data, subscribeToMore }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error :(((</p>

                        const posts = data.posts.map((post, id) => (
                          <Post data={post} user={user} key={id} />
                        ))
                        if (!unsubscribe)
                          unsubscribe = subscribeToMore({
                            document: POSTS_SUBSCRIPTION,
                            updateQuery: (prev, { subscriptionData }) => {
                              if (!subscriptionData.data) return prev
                              const newPost = subscriptionData.data.post.data
                              this.setState({postsList: [newPost, ...prev.posts]});
                              return {
                                ...prev,
                                posts: [newPost, ...prev.posts]
                              }
                            }
                          })

                        return <div>{posts}</div>
                      }}
                    </Query>
                  </div>
                </div>
            ))}
          </div>
      </div>
      </div>
    )
  }
}

export default App
