import React from "react";

class Logout extends React.Component {
  componentDidMount() {
    //removing token and full page reloading
    localStorage.removeItem("x-auth-token");
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
