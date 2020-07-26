import React from "react";
import { Card, Form, Button, Col, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useFormik } from "formik";

export default function Permission() {
  const initialValues = {
    document_type: "Passport",
    document_ref: "",
    permission_name: "NotYet",
    fullname: "",
    phone: "",
    email: "",
    reason: "Touring",
    travellers: "1",
    src_address: "",
    dest_address: "",
    description: "",
  };
  const onSubmit = (values) => {
    //event.preventDefault();
    const permission = {
      // document_type: this.state.document_type,
      // document_ref: this.state.document_ref,
      // permission_name: this.state.reason,
      // fullname: this.state.fullname,
      // phone: this.state.phone,
      // email: this.state.email,
      // reason: this.state.reason,
      // travellers: this.state.travellers,
      // src_address:
      //   this.state.src_landmark +
      //   " " +
      //   this.state.src_area +
      //   " " +
      //   this.state.src_district +
      //   " " +
      //   this.state.src_state +
      //   " " +
      //   this.state.src_zip,
      // dest_address:
      //   this.state.dest_landmark +
      //   " " +
      //   this.state.dest_area +
      //   " " +
      //   this.state.dest_district +
      //   " " +
      //   this.state.dest_state +
      //   " " +
      //   this.state.dest_zip,
      // description: this.state.description,
    };
    axios
      .post("http://localhost:8080/form/submit/", permission)
      .then((response) => {
        if (response.data != null) {
          this.setState({ show: true });
          console.log(this.state);
          setTimeout(() => this.setState({ show: false }), 7000);
        } else {
          this.setState({ show: false });
        }
      });
  };

  const validate = (values) => {
    const errors = {};

    if (!/^[a-zA-Z'-]+$/i.test(values.fullname)) {
      errors.fullname = "Invalid format for fullname";
    }
    if (!values.phone.match("[0-9]{10}")) {
      errors.phone = "Invalid format for phone";
    }
    if (!/^[a-zA-Z'-]+$/i.test(values.src_state)) {
      errors.src_state = "Invalid format for state";
    }
    if (!/^[a-zA-Z'-]+$/i.test(values.src_district)) {
      errors.src_district = "Invalid format for district";
    }
    if (!/^[a-zA-Z'-]+$/i.test(values.dest_state)) {
      errors.dest_state = "Invalid format for state";
    }
    if (!/^[a-zA-Z'-]+$/i.test(values.dest_district)) {
      errors.dest_district = "Invalid format for district";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <div>
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header className={"text-center"}>
          <h3>Permission Form</h3>
        </Card.Header>
        <Form onSubmit={formik.handleSubmit}>
          <Card.Body>
            <Card.Title>General Details</Card.Title>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Applicant Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullname"
                  defaultValue={formik.values.fullname}
                  onChange={formik.handleChange}
                  placeholder="Enter name"
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
                {formik.errors.fullname ? (
                  <div className="error">{formik.errors.fullname}</div>
                ) : null}
                <Form.Text className="text-muted">
                  Full Name as printed on id proof
                </Form.Text>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Applicant Proof Ref.No</Form.Label>
                <Form.Control
                  type="text"
                  name="document_ref"
                  defaultValue={formik.values.document_ref}
                  onChange={formik.handleChange}
                  placeholder="Enter valid Reference number"
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  defaultValue={formik.values.phone}
                  onChange={formik.handleChange}
                  placeholder="Enter valid Number"
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
                {formik.errors.phone ? (
                  <div className="error">{formik.errors.phone}</div>
                ) : null}
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  defaultValue={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Enter valid email"
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Col md={3}>
                <Form.Label htmlFor="document_type">Preference</Form.Label>
                <Form.Control
                  as="select"
                  id="document_type"
                  name="document_type"
                  defaultValue={formik.values.document_type}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                >
                  <option value="Aadhaar Card">Aadhaar Card</option>
                  <option value="Driving License">Driving License</option>
                  <option value="Passport">Passport</option>
                  <option value="Pan card">Pan card</option>
                  <option value="Voter ID">Voter ID</option>
                </Form.Control>
              </Col>
              <Col md={2}>
                <Form.Label htmlFor="travellers">No.of Travellers</Form.Label>
                <Form.Control
                  as="select"
                  id="travellers"
                  name="travellers"
                  defaultValue={formik.values.travellers}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Label htmlFor="reason">Reason for Travel</Form.Label>
                <Form.Control
                  as="select"
                  id="reason"
                  name="reason"
                  defaultValue={formik.values.reason}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                >
                  <option value="Medical/Emergency">Medical/Emergency</option>
                  <option value="Goods Transport">Goods Transport</option>
                  <option value="Marriage">Marriage</option>
                  <option value="Education Purpose">Education Purpose</option>
                  <option value="Touring">Touring</option>
                </Form.Control>
              </Col>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <Col>
                <Form.Label htmlFor="type">Select Type of travel</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="type" name="type">
                    Type Of Travel
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/within">
                      Travel Within State
                    </Dropdown.Item>
                    <Dropdown.Item href="#/outside">
                      Travel Outside State
                    </Dropdown.Item>
                    <Dropdown.Item href="#/goods">
                      Goods Transport
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="description"
                  defaultValue={formik.values.description}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  placeholder="how important this travel to you ?"
                  required
                  autoComplete="off"
                />
              </Form.Group>
            </Form.Row>
            <hr />
            <Card.Title>Present Address</Card.Title>
            <Form.Row>
              <Col md={3}>
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="src_state"
                  defaultValue={formik.values.src_state}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
                {formik.errors.src_state ? (
                  <div className="error">{formik.errors.src_state}</div>
                ) : null}
              </Col>
              <Col md={3}>
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  name="src_district"
                  defaultValue={formik.values.src_district}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
                {formik.errors.src_district ? (
                  <div className="error">{formik.errors.src_district}</div>
                ) : null}
              </Col>
              <Col md={3}>
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  name="src_area"
                  defaultValue={formik.values.src_area}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
              </Col>
              <Col md={3}>
                <Form.Label>Zip / Pincode</Form.Label>
                <Form.Control
                  type="text"
                  name="src_zip"
                  defaultValue={formik.values.src_zip}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Col md={8}>
                <Form.Label>
                  Landmark to your address with H.No / Flat.No
                </Form.Label>
                <Form.Control
                  type="text"
                  name="src_landmark"
                  defaultValue={formik.values.src_landmark}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
              </Col>
            </Form.Row>
            <hr />
            <Card.Title>Destination Address</Card.Title>
            <Form.Row>
              <Col md={3}>
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="dest_state"
                  defaultValue={formik.values.dest_state}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
                {formik.errors.dest_state ? (
                  <div className="error">{formik.errors.dest_state}</div>
                ) : null}
              </Col>
              <Col md={3}>
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  name="dest_district"
                  defaultValue={formik.values.dest_district}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
                {formik.errors.dest_district ? (
                  <div className="error">{formik.errors.dest_district}</div>
                ) : null}
              </Col>
              <Col md={3}>
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  name="dest_area"
                  defaultValue={formik.values.dest_area}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
              </Col>
              <Col md={3}>
                <Form.Label>Zip / Pincode</Form.Label>
                <Form.Control
                  type="text"
                  name="dest_zip"
                  defaultValue={formik.values.dest_zip}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Col md={8}>
                <Form.Label>
                  Landmark to your Destination address with H.No / Flat.No
                </Form.Label>
                <Form.Control
                  type="text"
                  name="dest_landmark"
                  defaultValue={formik.values.dest_landmark}
                  onChange={formik.handleChange}
                  className={"bg-dark text-white"}
                  required
                  autoComplete="off"
                />
              </Col>
            </Form.Row>
          </Card.Body>
          <Card.Footer
            style={{ textAlign: "right" }}
            className={" bg-dark text-white"}
          >
            <Button variant="danger" type="reset">
              <FontAwesomeIcon icon={faUndo} />
              &nbsp;Reset
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="success" type="submit">
              <FontAwesomeIcon icon={faSave} />
              &nbsp;Apply
            </Button>
          </Card.Footer>
        </Form>
      </Card>
      <br />
      <br />
      <br />
    </div>
  );
}
