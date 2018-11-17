import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getPostByID } from "../../actions/postActions";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import Spinner from "../common/Spinner";
import Comment from "../posts/Comment";

class Post extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getPostByID(this.props.match.params.id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.post.post === null && this.props.post.loading) {
      this.props.history.push("/not-found");
    }
  }
  render() {
    const { post, loading } = this.props.post;
    let postContent;
    if (loading || post == null) {
      return <Spinner />;
    } else {
      return (
        <div className="post">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-body mb-3">
                  <div className="row">
                    <div className="col-md-2">
                      <Link to="/profile">
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
                    </div>
                  </div>
                </div>
                {/* <!-- Comment Form --> */}
                <div className="post-form mb-3">
                  <div className="card card-info">
                    <div className="card-header bg-info text-white">
                      Say Something...
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <TextAreaFieldGroup
                            name="comment"
                            placeholder="Comment here..."
                            onChange={this.onChange}
                          />
                        </div>
                        <button
                          onSubmit={this.onSubmit}
                          type="submit"
                          className="btn btn-dark"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <!-- Comment Feed --> */}
                <Comment post={post} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

Post.propTypes = {
  getPostByID: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPostByID }
)(Post);
