import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { Table, Button } from "semantic-ui-react";
import AudioChannels from "./audioChannels";

class bodyOne extends Component {
  state = {
    btnClick: {
      value: "0",
      btnId: "",
      useMe: document.getElementById("ch1")
    }


  };

  constructor(props) {
    super(props);

    this.channel1 = this.channel1.bind(this);
    this.channelStop = this.channelStop.bind(this);    
  }

  channelStop() {
    let ch1 = document.getElementById("ch1");
    let ch2 = document.getElementById("ch2");
    let stopAll = [ch1, ch2];

    stopAll[0].pause();
  }
  channel1() {
    let ch1 = document.getElementById("ch1");
    const btn1 = document.getElementById("btn1");

    this.setState({
      btnClick: {
        value: btn1.value,
        btnId: btn1.id
      }
    });
  }

  render() {
    const { btnClick } = this.state;
    console.log(btnClick);

    if ((btnClick.id = "btn1") && (btnClick.value == true)) {
      console.log('OK');
      this.ch1 = document.getElementById("ch1");
      this.ch1.play();
      
    } else {
      console.log('empty');
      
    }

    return (
      <div>
        <AudioChannels />
        <Container>
          <Row>
            <Col className="sm-4">
              <text></text>
            </Col>
            <Col className="sm-4">
              <text></text>
            </Col>
            <Col className="sm-4">
              <text className="text-rigth">Ver 1.0</text>
            </Col>
          </Row>

          <Row>
            <Col>
              <Table className="mt-4" color="yellow" inverted>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Freq</Table.HeaderCell>
                    <Table.HeaderCell>Play</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Pranbors</Table.Cell>
                    <Table.Cell>200</Table.Cell>
                    <Table.Cell>
                      <Button id="btn1" value="1" onClick={this.channel1}>Play</Button>
                      <Button onClick={this.channelStop}>Stop</Button>
                    </Table.Cell>

                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Elshinta FM</Table.Cell>
                    <Table.Cell>310</Table.Cell>
                    <Table.Cell>
                      <Button id="btn2" value="0" onClick={this.channel1}>Play2</Button>
                      <Button onClick={this.channelStop}>Stop</Button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default bodyOne;
