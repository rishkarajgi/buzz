import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getPosts } from "../../actions/postActions";
import Spinner from "../common/Spinner";
import PostForm from "./PostForm";

class Post extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.post;
    let postsContent;
    if (loading || posts == null || posts == undefined) {
      postsContent = <Spinner />;
    } else {
      if (posts.length > 0) {
        postsContent = posts.map(post => (
          <div key={post.id} className="card card-body mb-3">
            <div className="row">
              <div className="col-md-2">
                <Link to={`/profile/user/${post.user}`}>
                  <img
                    className="rounded-circle d-none d-md-block"
                    src={post.avatar}
                    alt=""
                  />
                </Link>
                <br />
                <p className="text-center">{post.name}</p>
              </div>
              <div className="col-md-10">
                <p className="lead">{post.text}</p>
                <button type="button" className="btn btn-light mr-1">
                  <i className="text-info fas fa-thumbs-up" />
                  <span className="badge badge-light">{post.likes.length}</span>
                </button>
                <button type="button" className="btn btn-light mr-1">
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                  Comments
                </Link>
                {/* <button type="button" className="btn btn-danger mr-1">
                  <i className="fas fa-times" />
                </button> */}
              </div>
            </div>
          </div>
        ));
      } else {
        postsContent = (
          <div>
            <p>Fetching the posts...</p>
          </div>
        );
      }
    }
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              <div className="posts">{postsContent}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Post);
