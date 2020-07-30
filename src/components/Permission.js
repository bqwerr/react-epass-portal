import React, { Component } from "react";
import { Card, Form, Button, Col, Dropdown } from "react-bootstrap";
import FormUserDetails from "./FormUserDetails";
import FormTravelDetails from "./FormTravelDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class Permission extends Component {
  state = {
    step: 1,
    document_type: "Passport",
    document_ref: "",
    fullname: "",
    phone: "",
    email: "",
    reason: "Touring",
    travellers: "1",
    src_state: "",
    dest_state: "",
    src_district: "",
    dest_district: "",
    src_zip: "",
    dest_zip: "",
    src_landmark: "",
    dest_landmark: "",
    src_area: "",
    dest_area: "",
    description: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Proceed to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      document_type,
      document_ref,
      fullname,
      phone,
      email,
      reason,
      travellers,
      src_area,
      dest_area,

      src_state,
      dest_state,
      description,
      src_district,
      dest_district,
      src_zip,
      dest_zip,
      src_landmark,
      dest_landmark,
    } = this.state;
    const values = {
      document_type,
      document_ref,
      fullname,
      phone,
      email,

      reason,
      travellers,
      description,
      src_state,
      dest_state,
      src_district,
      dest_district,
      src_zip,
      dest_zip,
      src_landmark,
      dest_landmark,
      src_area,
      dest_area,
    };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            step={this.state.step}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormTravelDetails
            step={this.state.step}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <Confirm
            step={this.state.step}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 4:
        //return <Success />;
        return <h1>Success</h1>;
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

export default Permission;
