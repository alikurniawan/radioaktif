import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../css/header.css";
import LogoRadio from "../images/radioaktif.png";

class header extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <img alt="" className="LogoRadio" src={LogoRadio} />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default header;
