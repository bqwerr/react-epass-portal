import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Card, Button, Form } from "react-bootstrap";

export default class Status extends Component {
  state = {
    permission: [],
  };
  permission_id = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const vals = {};

    var config = {
      method: "get",
      url:
        "http://localhost:8080/api/permission/get/" + this.permission_id.value,
      data: vals,
    };

    axios(config)
      .then((response) => {
        if (response.data != null) {
          this.setState({ permission: response.data });
        }
      })
      .catch((error) => {
        toast("Sorry, Couldn't find your Permission");
        this.setState({ permission: [] });
      });
  };
  render() {
    const { permission } = this.state;

    return (
      <div className="col">
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            autoFocus
            className="form-control my-3"
            placeholder="Enter provided permission id.."
            defaultValue=""
            ref={(input) => (this.permission_id = input)}
          />
        </Form>
        <br />
        {permission.length === 0 ? (
          <div>
            <p className="text-danger">Please provide Valid permission id</p>
            <p className="text-primary">
              Permission id is: Proof_Reference_Number@Mobile
            </p>
          </div>
        ) : (
          <div>
            <Card className={"border border-dark bg-dark text-white"}>
              <Card.Header>
                <h3 className="text-primary">
                  Details for {permission.fullname}
                </h3>
                <div>
                  <strong>
                    {permission.status === "accepted" ? (
                      <div>
                        <p className="text-success">
                          Your Permission was Granted
                        </p>
                        <p className="text-warning">
                          Please Note the below E-pass is Valid till{" "}
                          {new Date(
                            new Date(permission.instant * 1000).getTime() +
                              86400000 * 5
                          ).toString()}
                        </p>
                      </div>
                    ) : permission.status === "rejected" ? (
                      <p className="text-danger">
                        Your Permission has been rejected due to Covid alert
                      </p>
                    ) : (
                      <p className="text-info">
                        Your Permission is still pending, wait till admin
                        approves
                      </p>
                    )}
                  </strong>
                </div>
              </Card.Header>
              <Card.Body>
                <div className={"row"}>
                  <div className={"col-md-6"}>
                    <Card.Title>Applicant Full Name:</Card.Title>
                    <Card.Text>{permission.fullname}</Card.Text>
                  </div>
                  <div className={"col-md-6"}>
                    <Card.Title>Applicant Proof Document.No:</Card.Title>
                    <Card.Text>{permission.document_ref}</Card.Text>
                  </div>
                </div>
                <hr />
                <div className={"row"}>
                  <div className={"col-md-6"}>
                    <Card.Title>Mobile.No:</Card.Title>
                    <Card.Text>{permission.phone}</Card.Text>
                  </div>
                  <div className={"col-md-6"}>
                    <Card.Title>Email ID:</Card.Title>
                    <Card.Text>{permission.email}</Card.Text>
                  </div>
                </div>
                <hr />
                <div className={"row"}>
                  <div className={"col-md-6"}>
                    <Card.Title>Selected Proof Type:</Card.Title>
                    <Card.Text>{permission.document_type}</Card.Text>
                  </div>
                  <div className={"col-md-6"}>
                    <Card.Title>No.of Travellers:</Card.Title>
                    <Card.Text>{permission.travellers}</Card.Text>
                  </div>
                </div>
                <hr />
                <div className={"row"}>
                  <div className={"col-md-6"}>
                    <Card.Title>Reason:</Card.Title>
                    <Card.Text>{permission.reason}</Card.Text>
                  </div>
                  <div className={"col-md-6"}>
                    <Card.Title>Category of Travel:</Card.Title>
                    <Card.Text>{permission.permission_name}</Card.Text>
                  </div>
                </div>
                <hr />
                <div className={"row"}>
                  <div className={"col-md-6"}>
                    <Card.Title>Source Address:</Card.Title>
                    <Card.Text>{permission.src_address}</Card.Text>
                  </div>
                  <div className={"col-md-6"}>
                    <Card.Title>Destination Address:</Card.Title>
                    <Card.Text>{permission.dest_address}</Card.Text>
                  </div>
                </div>
                <hr />
              </Card.Body>
              <Card.Footer style={{ textAlign: "right" }}>
                <Button variant="primary" onClick={() => window.print()}>
                  Print
                </Button>
              </Card.Footer>
            </Card>
            <br></br>
            <br></br>
            <br></br>
          </div>
        )}
      </div>
    );
  }
}
