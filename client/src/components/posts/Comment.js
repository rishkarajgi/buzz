import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.text, "comment");
    // const newComment = {
    //   text: this.state.text
    // };
    // this.props.addComment(newComment);
    // this.setState({
    //   text: ""
    // });
  };
  render() {
    const { post } = this.props;
    const comments = post.comments;

    let commentsContent;
    if (comments && comments.length > 0) {
      commentsContent = comments.map(comment => (
        <div key={comment._id} className="card card-body mb-3">
          <div className="row">
            <div className="col-md-2">
              <Link to="/profile">
                <img
                  className="rounded-circle d-none d-md-block"
                  src={comment.avatar}
                  alt=""
                />
              </Link>
              <br />
              <p className="text-center">{comment.name}</p>
            </div>
            <div className="col-md-10">
              <p className="lead">{comment.text}</p>
            </div>
          </div>
        </div>
      ));
    } else {
      commentsContent = (
        <div>
          <p>Be the first one to comment</p>
        </div>
      );
    }
    return (
      <div className="comments">
        {/* <!-- Comment Item --> */}
        {commentsContent}
      </div>
    );
  }
}
