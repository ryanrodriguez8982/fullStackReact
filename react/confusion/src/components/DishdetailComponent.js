import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



class Detail extends Component {
  constructor(props) {
    super(props);
  }

  renderComments(comments) {
    const rComment = comments.map((comment) => {
      return (
        <li key={comment.id} className="mb-3">
          {comment.comment}
          <div className="mt-3">
            -- {comment.author}
          </div>
        </li>
      );
    });
    return (
      rComment
    );
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle heading>
            {dish.name}
          </CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card >
    );
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {this.renderComments(this.props.dish.comments)}
            </ul>
          </div>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

export default Detail;