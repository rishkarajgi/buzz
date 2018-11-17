import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import InputGroup from "../common/InputGroup";
import { createProfile } from "../../actions/profileActions";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
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
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };
    this.props.createProfile(profileData, this.props.history);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { errors, displaySocialInputs } = this.state;
    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            type="text"
            className="form-control form-control-lg"
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />
          <InputGroup
            type="text"
            className="form-control form-control-lg"
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />
          <InputGroup
            type="text"
            className="form-control form-control-lg"
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
          <InputGroup
            type="text"
            className="form-control form-control-lg"
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />
          <InputGroup
            type="text"
            className="form-control form-control-lg"
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }
    const options = [
      {
        label: "* Select Professional Status",
        value: "0"
      },
      {
        label: "Developer",
        value: "Developer"
      },
      {
        label: "Junior Developer",
        value: "Junior Developer"
      },
      {
        label: "Senior Developer",
        value: "Senior Developer"
      },
      {
        label: "Student or Learning",
        value: "Student or Learning"
      },
      {
        label: "Manager",
        value: "Manager"
      },
      {
        label: "Instructor or Teacher",
        value: "Instructor or Teacher"
      },
      {
        label: "Intern",
        value: "Intern"
      },
      {
        label: "Other",
        value: "Other"
      }
    ];
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <a href="dashboard.html" className="btn btn-light">
                Go Back
              </a>
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile handle"
                  name="handle"
                  onChange={this.onChange}
                  error={errors.handle}
                  value={this.state.handle}
                  info="A unique handle for your profile URL. Your full name,
                  company name, nickname, etc (This CAN'T be changed later)"
                />
                <SelectListGroup
                  name="status"
                  info="Give us an idea of where you are at in your career"
                  options={options}
                  onChange={this.onChange}
                  error={errors.status}
                  value={this.state.status}
                />
                <TextFieldGroup
                  placeholder="Company"
                  name="company"
                  onChange={this.onChange}
                  error={errors.company}
                  value={this.state.company}
                  info="Could be your own company or one you work for"
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  onChange={this.onChange}
                  error={errors.website}
                  value={this.state.website}
                  info="Could be your own or a company website"
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  onChange={this.onChange}
                  error={errors.location}
                  value={this.state.location}
                  info="City & state suggested (eg. Boston, MA)"
                />
                <TextFieldGroup
                  placeholder="Skills"
                  name="skills"
                  onChange={this.onChange}
                  error={errors.skills}
                  value={this.state.skills}
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP)"
                />
                <TextFieldGroup
                  placeholder="Github Username"
                  name="githubusername"
                  onChange={this.onChange}
                  error={errors.githubusername}
                  value={this.state.githubusername}
                  info="If you want your latest repos and a Github link, include
                  your username"
                />
                <TextAreaFieldGroup
                  placeholder="A short bio of yourself"
                  name="bio"
                  value={this.state.bio}
                  info="Tell us a little about yourself"
                  onChange={this.onChange}
                  error={errors.bio}
                />

                <div className="mb-3">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs}
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
