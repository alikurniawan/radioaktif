import React, { Component } from "react";
import { Container, Input, Row, Col } from "reactstrap";
import "../css/header.css";
import LogoRadio from "../images/radioaktif.png";

class header extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <img className="LogoRadio" src={LogoRadio} />
            </Col>
            <Col></Col>
            <Col>
              <Input className="mt-2" type="search" placeholder="Search Here..." />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default header;
