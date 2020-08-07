import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default class Welcome extends Component {
  onClick = () => this.props.history.push("/login");
  handleLogout = () => {
    localStorage.clear();
    this.props.history.replace("/");
  };
  render() {
    const uid = localStorage.getItem("uid");
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
            {uid === null ? (
              <Button variant="secondary" onClick={this.onClick}>
                Login
              </Button>
            ) : (
              <div>
                <p className="text-success">Logged In as Admin {uid}</p>
                <Button variant="danger" onClick={this.handleLogout}>
                  Log out
                </Button>
              </div>
            )}
          </div>
        </Jumbotron>
      </div>
    );
  }
}
