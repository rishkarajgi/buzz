import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import isEmpty from "../../validations/is-empty";
import { Link } from "react-router-dom";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    console.log(profile, "PROFILE FROM PROFILE HEADER");
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="rounded-circle"
                  src={profile.user.avatar}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile.user.name}</h1>
              <p className="lead text-center">
                {profile.status} at {profile.company}
              </p>
              {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
              <p>
                {isEmpty(profile.website) ? null : (
                  <Link className="text-white p-2" to={profile.website}>
                    <i className="fas fa-globe fa-2x" />
                  </Link>
                )}
                {isEmpty(profile.twitter) ? null : (
                  <Link className="text-white p-2" to={profile.twitter}>
                    <i className="fas fa-twitter fa-2x" />
                  </Link>
                )}
                {isEmpty(profile.facebook) ? null : (
                  <Link className="text-white p-2" to={profile.facebook}>
                    <i className="fas fa-facebook fa-2x" />
                  </Link>
                )}
                {isEmpty(profile.linkedin) ? null : (
                  <Link className="text-white p-2" to={profile.linkedin}>
                    <i className="fas fa-linkedin fa-2x" />
                  </Link>
                )}
                {isEmpty(profile.instagram) ? null : (
                  <Link className="text-white p-2" to={profile.instagram}>
                    <i className="fas fa-instagram fa-2x" />
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired
};
export default connect(
  null,
  {}
)(ProfileHeader);
