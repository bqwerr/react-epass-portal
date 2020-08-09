import React from "react";
import { Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const Details = (props) => {
  const markSafeOrUnsafe = (id, val) => {
    var data = "";
    const authToken = localStorage.getItem("authToken");
    var config = {
      method: "put",
      url: "http://localhost:8080/api/permission/update/" + id + "/" + val,
      headers: {
        Authorization: "Bearer " + authToken,
      },
      data: data,
    };
    axios(config)
      .then((response) => {
        if (response.data != null) {
          toast.success("Status Updated for this Permission");
        }
      })
      .catch((error) => {
        toast.error("An unexpected error Occured");
      });
  };

  const { permission } = props.location.state ? props.location.state : null;
  if (!permission) return null;
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
          <Button
            variant="danger"
            onClick={() =>
              markSafeOrUnsafe(permission.permission_id, "rejected")
            }
          >
            Mark as Unsafe Travel (Reject)
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            variant="success"
            onClick={() =>
              markSafeOrUnsafe(permission.permission_id, "accepted")
            }
          >
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
