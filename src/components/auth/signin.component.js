import React from "react";

import InputField from "../../components/common/input.common.component";
import { signin } from "../../services/login.service";
import "../../css/signinup.css";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        email: "",
        password: "",
      },
      errors: {},
    };
  }

  //validating input field
  validate() {
    const { account } = this.state;

    const errors = {};

    if (account.email.trim() === "")
      //setting error based on input field
      errors.email = "Email is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  }

  async handleSubmit(e) {
    e.preventDefault();
    // calling validate before setting state
    const errors = this.validate();
    this.setState({
      errors: errors || {},
    });
    // if errors return from here
    if (errors) return;

    //calling server
    const { account } = this.state;
    try {
      const { data } = await signin(account.email, account.password);
      //storing token to local storage
      localStorage.setItem("x-auth-token", data.token);
      //full reloding of site so as for cdm to work on app.js
      window.location = "/landingpage";
    } catch (error) {
      const { data, status } = error.response;
      if (data && status === 400) {
        alert(data.message);
      }
    }
  }

  handleChange(e) {
    const { currentTarget: input } = e;
    //setting state for given input field
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({
      account,
    });
  }
  render() {
    const { account, errors } = this.state;
    return (
      <div className="form_container">
        <div className="form_header">
          <h2>Member Login</h2>
          <p>Get started with your account</p>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <InputField
            type="email"
            name="email"
            label="Email"
            value={account.email}
            error={errors.email}
            onChange={this.handleChange.bind(this)}
          />
          <InputField
            type="password"
            name="password"
            label="Password"
            value={account.password}
            error={errors.password}
            onChange={this.handleChange.bind(this)}
          />
          <button
            disabled={this.validate()} //disabled if empty field
            type="submit"
            className="btn btn-primary"
          >
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default Signin;
