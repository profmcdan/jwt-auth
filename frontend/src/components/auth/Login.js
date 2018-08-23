import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
      email: this.state.email,
      password: this.state.password
    };
    // console.log(user);
    this.props.loginUser(user, this.props.history);
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
        <h2 style={{ marginBottom: "40px" }}>Login</h2>
        <form onSubmit={this.handleSubmit}>
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
