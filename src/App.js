import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Status from "./components/Status";
import Permission from "./components/Permission";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const marginTop = { marginTop: "30px" };
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/add" exact component={Permission} />
              <Route path="/status" exact component={Status} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
