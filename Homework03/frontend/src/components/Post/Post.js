import React from 'react'

import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap'

class Post extends React.Component {
  renderPost = () => {
    if(this.props.user.name === this.props.data.author.name) {
      return (
        <Card className="posts" style={{ margin: '1%', width: '100%' }}>
          <CardHeader>{this.props.data.title}</CardHeader>
          <CardBody>
            {this.props.data.body || <p style={{ opacity: 0.5 }}>No body for this post...</p>}
          </CardBody>
          <CardFooter>{`${this.props.data.author.name} - published: ${this.props.data.published}`}</CardFooter>
        </Card>
      )
    } else {
      return null;
    }
  }
  render() {
    return (
      this.renderPost()
    )
  }
}

// const Post = ({
//   data: {
//     title,
//     body,
//     author: { name, id},
//     published
//   },
//   user: {
//     name,
//     id
//   }
// }) => {
//   return (
    
//     <Card style={{ margin: '1%', width: '100%' }}>
//       <h1></h1>
//       <CardHeader>{title}</CardHeader>
//       <CardBody>
//         {body || <p style={{ opacity: 0.5 }}>No body for this post...</p>}
//       </CardBody>
//       <CardFooter>{`${name} - published: ${published}`}</CardFooter>
//     </Card>
//   )
// }

export default Post
