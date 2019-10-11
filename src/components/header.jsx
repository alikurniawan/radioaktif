import React, { Component } from "react";
import { Container, Input, Row, Col } from "reactstrap";
import "../css/header.css";
import LogoRadio from "../images/radioaktif.png";
import "../dbase/fmChannels.json";

class header extends Component {
  
  constructor(){
    super();

    this.changeHandler = this.changeHandler.bind(this);
  }
  
  state = {
    dataK: ""
  };

  componentDidMount = () => {
    fetch("../dbase/fmChannels.json").then(function(data) {
      console.log(data);
    });
  };

  changeHandler = (event) => {

    const {value} = event.target

    this.setState({
      dataK: value
    })
  };

  render() {

    const {dataK} = this.state;

    return (
      <div>
        <Container>
          <Row>
            <Col>
              <img className="LogoRadio" src={LogoRadio} />
            </Col>
            <Col></Col>
            <Col>
              <div className="sm-2">
                <Input 
                  className="mt-2"
                  value={dataK}
                  onChange={this.changeHandler}
                />
                <h3>{dataK}</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default header;
