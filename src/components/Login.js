import React, { Component } from "react";
import { useFormik } from "formik";
import { Card, Form, Button } from "react-bootstrap";
import * as Yup from "yup";

const initialValues = {
  uid: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  uid: Yup.string().required("Valid UID is Required"),
  password: Yup.string().required("Password is Required"),
});

function Login() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("formik.touched", formik.touched);

  return (
    <Card
      className={"border border-dark bg-dark text-white mx-auto"}
      style={{ width: "30rem" }}
    >
      <Card.Header className={"text-center"}>
        <h3>Login To Admin Console</h3>
      </Card.Header>

      <Form onSubmit={formik.handleSubmit}>
        <Card.Body>
          <div className="row">
            <div className={"col"}>
              <Form.Label>UID</Form.Label>
              <Form.Control
                type="text"
                id="uid"
                name="uid"
                className={"bg-dark text-white"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.uid}
              />
              {formik.touched.uid && formik.errors.uid ? (
                <div className="error">{formik.errors.uid}</div>
              ) : null}
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className={"col"}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"
                className={"bg-dark text-white"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <Button variant="success">Login</Button>
        </Card.Footer>
      </Form>
    </Card>
  );
}

export default Login;
