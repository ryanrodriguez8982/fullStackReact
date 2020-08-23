import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';




function RenderComments({ comments }) {
  const rComment = comments.map((comment) => {
    return (
      <li key={comment.id} className="mb-3">
        {comment.comment}
        <div className="mt-3">
          -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
        </div>
      </li>
    );
  });
  return (
    rComment
  );
}

function RenderDish({ dish }) {
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

const Detail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              <RenderComments comments={props.dish.comments} />
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>
  }

}

export default Detail;