import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { profile } = this.props;
    let expItems = profile.experience.map(experience => (
      <li className="list-group-item">
        <h4>{experience.company}</h4>
        <p>
          <Moment format="MMM YYYY">{experience.from}</Moment> -
          {experience.to == null ? (
            "Current"
          ) : (
            <Moment format="MMM YYYY">{experience.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position:</strong> {experience.title}
        </p>
        <p>
          <strong>Description:</strong> {experience.description}
        </p>
      </li>
    ));
    let eduItems = profile.education.map(education => (
      <li className="list-group-item">
        <h4>{education.college}</h4>
        <p>
          <Moment format="MMM YYYY">{education.from}</Moment> -
          {education.to == null ? (
            "Current"
          ) : (
            <Moment format="MMM YYYY">{education.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree: </strong>
          {education.degree}
        </p>
        <p>
          <strong>Field Of Study: </strong>
          {education.fieldofstudy}
        </p>
        <p>
          <p>
            <strong>Description:</strong> {education.description}
          </p>
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          <ul className="list-group">
            {expItems.length > 0 ? (
              expItems
            ) : (
              <p className="text-center">No Experience Listed</p>
            )}
          </ul>
        </div>
        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          <ul className="list-group">
            {eduItems.length > 0 ? (
              eduItems
            ) : (
              <p className="text-center">No Experience Listed</p>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

ProfileCreds.propTypes = {
  profile: PropTypes.object.isRequired
};
export default connect(
  null,
  {}
)(ProfileCreds);
