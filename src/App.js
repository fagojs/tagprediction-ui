import React from "react";
import { Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";

import LandingPage from "./components/landingpage.component";
import Signin from "./components/auth/signin.component";
import Signup from "./components/auth/signup.component";
import Home from "./components/home.component";
import NavBar from "./components/navbar.component";
import Logout from "./components/auth/logount.component";
import NotFound from "./components/notfound.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    try {
      //decoding user with given token stored and passing to required component
      const jwt = localStorage.getItem("x-auth-token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (error) {}
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <NavBar user={user} />
        <Switch className="app">
          <Route path="/signin" component={Signin} />
          <Route path="/register" component={Signup} />
          <Route path="/logout" component={Logout} />
          <Route
            path="/landingpage"
            render={(props) => {
              //protected routes
              return user ? <LandingPage {...props} /> : <Signin />;
            }}
          />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
