import React, { Component } from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import Instructions from "./Instructions";
export default class Welcome extends Component {
  render() {
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
        </Jumbotron>

        {/* <Row>
          <Col md={"6"}>
            <Instructions />
          </Col>
        </Row> */}
      </div>
    );
  }
}
