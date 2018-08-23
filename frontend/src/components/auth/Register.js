import React, { Component } from "react";

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
    console.log(user);
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <h2 style={{ marginBottom: "40px" }}>Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="form-control"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              className="form-control"
              value={this.state.password2}
              onChange={this.handleInputChange}
            />
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

export default Register;
