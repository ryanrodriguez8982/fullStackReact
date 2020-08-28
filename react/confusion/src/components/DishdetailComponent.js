import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Col, Breadcrumb, Button, BreadcrumbItem, Modal, ModalHeader, ModalBody, Label, Row } from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentModalOpen: false
    };
    this.toggleCommentModal = this.toggleCommentModal.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  }

  toggleCommentModal() {
    this.setState({
      isCommentModalOpen: !this.state.isCommentModalOpen
    })
  }

  render() {
    return (
      <>
        <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleCommentModal}>
            Submit Comment
          </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleCommentSubmit(values)}>
              <Row className="form-group">
                <Col sm={{ size: 12 }}>
                  <Label htmlFor="rating">Rating</Label>
                </Col>

                <Col sm={{ size: 12 }}>
                  <Control.select model=".rating" id="rating" name="rating">
                    <option >1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">

                <Col sm={{ size: 12 }}>
                  <Label htmlFor="name">Your Name</Label>
                </Col>

                <Col sm={{ size: 12 }}>
                  <Control.text model=".name" id="name" name="name" placeholder="Your Name"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(15)
                    }} />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    message={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col sm={{ size: 12 }}>
                  <Label htmlFor="comment">Comment</Label>
                </Col>
                <Col sm={{ size: 12 }}>
                  <Control.textarea model="comment" id="comment" name="comment" />
                </Col>
              </Row>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
        <Button outline onClick={this.toggleCommentModal}>
          <span className="fa fa-pencil fa-lg">Submit Comment</span>
        </Button>
      </>
    )
  }
}

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
    <div>
      {rComment}
      < CommentForm />
    </div>
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
        <Breadcrumb>
          <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              <RenderComments comments={props.comments} />
            </ul>
          </div>
        </div >
      </div >
    );
  } else {
    return <div></div>
  }

}

export default Detail;