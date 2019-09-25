import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { Table, Button } from "semantic-ui-react";
import AudioChannels from "./audioChannels";

class bodyOne extends Component {
  state = {};

    constructor(props){
        super(props);

        this.channel1 = this.channel1.bind(this);

    }

    channel1(){
        let ch1 = document.getElementById("ch1");

        ch1.play();
    }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Table className="mt-5" color="yellow" inverted>
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
                    <Table.Cell><Button onClick={this.channel1}>Play</Button></Table.Cell>
                    <AudioChannels />
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Kisi FM</Table.Cell>
                    <Table.Cell>310</Table.Cell>
                    <Table.Cell><Button>Play</Button></Table.Cell>
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
