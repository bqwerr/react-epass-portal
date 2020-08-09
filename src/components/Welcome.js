import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import Posts from "./Posts";
import { toast } from "react-toastify";
import axios from "axios";

export default class Welcome extends Component {
  onClick = () => this.props.history.push("/login");
  handleLogout = () => {
    localStorage.clear();
    window.location = "/";
    toast.success("Logout Successful");
  };
  handleRefresh = () => {
    const vals = {
      uid: localStorage.getItem("uid"),
      refreshToken: localStorage.getItem("refreshToken"),
    };

    const authToken = localStorage.getItem("authToken");

    var config = {
      method: "post",
      url: "http://localhost:8080/api/auth/refresh/token",
      headers: {
        Authorization: "Bearer " + authToken,
      },
      data: vals,
    };

    axios(config)
      .then((response) => {
        if (response.data != null) {
          const authToken = response.data.authenticationToken;
          localStorage.setItem("authToken", authToken);
          localStorage.setItem("uid", response.data.uid);
          localStorage.setItem("expiresAt", response.data.expiresAt);
          this.props.handleChange();
          toast.success("Login Successful");
        }
      })
      .catch((error) => {
        window.location = "/";
        localStorage.clear();
        toast.error("Session was expired, Login Again!");
      });
  };
  render() {
    const { user } = this.props;
    const expiresAt = localStorage.getItem("expiresAt");
    const val = expiresAt ? new Date(expiresAt * 1000) : null;
    return (
      <div>
        <Jumbotron className="bg-dark text-white">
          <h2>Welcome to Travel Pass Portal</h2>
          <p>
            Any individual/group can apply for the movement pass to travel
            within or outside the state using this framework. Currently, this
            framework provides services to 10 states of India to provide
            movement e-Pass during COVID-19 pandemic.
          </p>
          <div>
            {!user ? (
              <Button variant="secondary" onClick={this.onClick}>
                Login
              </Button>
            ) : (
              <div>
                <p>
                  Logged In as Admin:{" "}
                  <span className="text-success">{user.uid}</span>
                </p>
                <p>
                  Your Session Expires At:{" "}
                  <span className="text-warning">{val.toString()} </span>
                </p>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={this.handleLogout}
                >
                  Delete Token
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  variant="success"
                  onClick={this.handleRefresh}
                  className="btn-sm"
                >
                  Refresh Token
                </Button>
              </div>
            )}
          </div>
        </Jumbotron>
        <Posts user={user} />
      </div>
    );
  }
}
