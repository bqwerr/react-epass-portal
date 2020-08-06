import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Permission from "./components/Permission";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";

class App extends Component {
  render() {
    const marginTop = { marginTop: "30px" };
    return (
      <Router>
        <NavigationBar />
        <Container>
          <Row>
            <Col lg={12} style={marginTop}>
              <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/add" exact component={Permission} />
                <Route path="/login" exact component={Login} />
                <Route path="/dashboard/:id" component={Details} />
                <Redirect to="/" />
              </Switch>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Router>
    );
  }
}

export default App;
