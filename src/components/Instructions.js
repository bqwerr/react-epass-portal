import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class Instructions extends Component {
  render() {
    return (
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>Instructions</Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup>
              <ListGroup.Item variant="primary">
                Fill in all the mandatory details carefully and submit.
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                After successful submission of your application, an application
                reference number will get generated. Please note it to track the
                application status.
              </ListGroup.Item>
              <ListGroup.Item variant="success">
                Keep a soft/hard copy of the e-pass provided while traveling and
                show it to the Security Personnel if asked.
              </ListGroup.Item>
              <ListGroup.Item variant="danger">
                Epass Will be provided based on the Covid Status to ensure safe
                travel
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Instructions;
