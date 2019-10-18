import React, { Component } from "react";
import { Row, Col, Container, Input } from "reactstrap";
import { Table, Button } from "semantic-ui-react";
import AudioChannels from "./audioChannels";

class bodyOne extends Component {
  constructor(){
    super();

    this.state = {channelsData : []} ;

    this.cariChannel = this.cariChannel.bind(this);
  }

  componentDidMount(){
    fetch("./channels.json")
    .then(res => Response.json())
    .then((data) => {
      this.setState({channelsData: data})
    })
  }

  cariChannel = () => {
    console.log('Handrel')
  }

  render() {
    return (
      <div>
        <AudioChannels />
        <Container>
          <div className="mt-5">
            <Row>
              <Col className="sm-4 mt-2">Ver 1.0</Col>
              <Col className="sm-4"></Col>
              <Col className="sm-4">
                <Input type="text" placeholder="Search Here...." value={this.state} onChange={this.cariChannel} />
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
                      <Table.Cell>{this.showListed}</Table.Cell>
                      <Table.Cell>200</Table.Cell>
                      <Table.Cell>
                        <Button id="btn1" value="1" onClick={this.channel1}>
                          Play
                        </Button>
                        <Button onClick={this.channelStop}>Stop</Button>
                        {/* <Button>{this.state.jenis.map((todo, index) => `<Button>${todo}</Button>`)}</Button> */}
                      </Table.Cell>
                    </Table.Row>
                    {/* <Table.Row>
                    <Table.Cell>Elshinta FM</Table.Cell>
                    <Table.Cell>310</Table.Cell>
                    <Table.Cell>
                      <Button id="btn2" value="1" onClick={this.channel1}>
                        Play2
                      </Button>
                      <Button onClick={this.channelStop}>Stop</Button>
                    </Table.Cell>
                  </Table.Row> */}
                  </Table.Body>
                </Table>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default bodyOne;
