import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../actions/auth";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    // console.log(user);
    this.props.registerUser(user, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <h2 style={{ marginBottom: "40px" }}>Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.name
              })}
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.email
              })}
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.password
              })}
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.password2
              })}
              value={this.state.password2}
              onChange={this.handleInputChange}
            />
            {errors.password2 && (
              <div className="invalid-feedback">{errors.password2}</div>
            )}
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register User
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
