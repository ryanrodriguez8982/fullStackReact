import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Comment extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const comments = this.props.dish.comments.map((comment) => {
      return (
        <div key={comment.id}>
          <div className="row">
            <CardText>{comment.comment}</CardText>
          </div>
          <div className="row">
            -- <CardText>{comment.author}</CardText>
            <br />
          </div>
        </div>
      )
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <CardTitle heading>Comments</CardTitle>
        {comments}
      </div>
    );
  }
}

export default Comment;