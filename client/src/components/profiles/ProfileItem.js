import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileItem extends Component {
  render() {
    let profile = this.props.profile;
    let handle = profile.handle;
    let skillSet;
    if (profile.skills && profile.skills.length > 0) {
      skillSet = profile.skills.map(skill => (
        <li className="list-group-item">
          <i className="fa fa-check pr-1" />
          {skill}
        </li>
      ));
    } else {
      skillSet = (
        <li className="list-group-item">
          <i className="fa fa-check pr-1" />
          None
        </li>
      );
    }
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle" src={profile.user.avatar} alt="" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.user.name}</h3>
            <p>
              {profile.status} at {profile.company}
            </p>
            <p>{profile.location}</p>
            <Link to={`/profile/${profile.handle}`} className="btn btn-info">
              View Profile
            </Link>
          </div>
          <div className="col-md-4 d-none d-lg-block">
            <h4>Skill Set</h4>
            <ul className="list-group">{skillSet}</ul>
          </div>
        </div>
      </div>
    );
  }
}
ProfileItem.proptypes = {
  profile: PropTypes.object.isRequired
};
export default connect(
  null,
  {}
)(ProfileItem);
