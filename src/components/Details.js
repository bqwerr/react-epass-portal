import React from "react";
import { Card, Button } from "react-bootstrap";

const Details = (props) => {
  const markSafe = () => {};
  const markUnSafe = () => {};
  const permission = props.location.state.permission;
  return (
    <div>
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>
          <h3 className="text-primary">Details for {permission.fullname}</h3>
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
          <div className={"row"}>
            <div className={"col-md-6"}>
              <Card.Title>Description:</Card.Title>
              <Card.Text>{permission.description}</Card.Text>
            </div>
          </div>
        </Card.Body>
        <Card.Footer style={{ textAlign: "right" }}>
          <Button variant="danger" onClick={markUnSafe}>
            Mark as Unsafe Travel (Reject)
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="success" onClick={markSafe}>
            Accept
          </Button>
        </Card.Footer>
      </Card>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Details;
