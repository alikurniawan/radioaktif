import React, { Component } from "react";
import { Row, Col, Container, Input } from "reactstrap";
import { Table, Button } from "semantic-ui-react";
import AudioAll from "./audioChannels";
import { tsConstructorType } from "@babel/types";

class bodyOne extends Component {
  

  constructor() {
    super();

    this.state = {
      channelsRadio: [
        {
          "name" : "Elshinta",
          "src" : "http://listento.ardanradio.com:1059/stream/1/"
        },
        {
          "name" : "Roja",
          "src" : "http://202.137.4.147:8000/;"
        },
        {
          "name" : "Bahagia Radio",
          "src" : "http://202.137.4.147:8000/;"
        }
      ]
    };

    this.cariChannel = this.cariChannel.bind(this);
    this.pushButtonStopPlay = this.pushButtonStopPlay.bind(this);
  }

  componentDidMount() {
    let tableListsRow = document.getElementById("tableListsRow");

    
  }

  componentWillMount(){
    let dataListing = [];
    const items = this.state.channelsRadio.map(
      (item, key) => <li key={item.id}>{item.name}</li>
    );
  }

  cariChannel = () => {
    let channels1 = this.state.channelsRadio[0];
    let audioAllSet = document.getElementById("audioAll");
    let channelsRadioSetIn = audioAllSet.setAttribute('src', channels1);

    let playNow = audioAllSet.play();
  };

  pushButtonStopPlay = () => {    
    let ster = document.getElementById("audioAll");
    ster.pause();
  }
      
  

  render() {

    
    
    return (
      <div>
        <AudioAll />
        
        <Container>
          <div className="mt-5">
            <Row>
              <Col className="sm-4 mt-2">Ver 1.0</Col>
              <Col className="sm-4"></Col>
              <Col className="sm-4">
                <Input
                  type="text"
                  placeholder="Search Here...."
                  value={this.state}
                  onChange={this.cariChannel}
                />
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
                    

{
  this.state.channelsRadio.map(
    (item, key) => (
      <Table.Row>
                      <Table.Cell>{item.name}</Table.Cell>
                      <Table.Cell>200</Table.Cell>
                      <Table.Cell>
                        <Button id="btn1" value="1" onClick={this.cariChannel}>
                          Play
                        </Button>
                        <Button onClick={this.pushButtonStopPlay}>Stop</Button>
                      </Table.Cell>
                    </Table.Row>
    )
  )
}

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
