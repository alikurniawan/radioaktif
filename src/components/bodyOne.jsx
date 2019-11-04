import React, { Component } from "react";
import { Row, Col, Container, Input } from "reactstrap";
import { Table, Button } from "semantic-ui-react";

class bodyOne extends Component {


  constructor() {
    super();

    this.state = {
      channelsRadio: [
        {
          "id": 0,
          "name": "Elshinta",
          "freqCha": "100",
          "src": "http://listento.ardanradio.com:1059/stream/1/"
        },
        {
          "id": 1,
          "name": "Roja",
          "freqCha": "200",
          "src": "http://202.137.4.147:8000/;"
        },
        {
          "id": 2,
          "name": "Bahagia Radio",
          "freqCha": "300",
          "src": "http://202.139.4.147:8000/;"
        }
      ]
    };

    this.playChannel = this.playChannel.bind(this);
    this.pushButtonStopPlay = this.pushButtonStopPlay.bind(this);
    this.cariChannel = this.cariChannel.bind(this);
  }


  cariChannel = () => {

    // let cariChannels = document.getElementById("cariChannels");
    // let textValues = cariChannels.value;
    // let textToLowerCase = textValues.textToLowerCase();

    // let textSearch = this.state.channelsRadio.filter(todo => (todo.textToLowerCase()))
  }

  playChannel = (event) => {

    const catchButton = document.getElementsByName("btnToCatch");
    const catchAudio = document.getElementById("audio-element");

    const catchButtonOnlyId = event.target.getAttribute("id");

    catchAudio.play();

    // if(catchButtonOnlyId == 0){
    //   catchAudio.play();
    // }else if (catchButtonOnlyId == 1){
    //   console.log("say 1")
    // }else if(catchButtonOnlyId == 2){
    //   console.log("say 2");
    // }else{
    //   console.log("Music Off");
    // }

    console.log("Hear You")

  };

  pushButtonStopPlay = () => {

  }

  render() {

    return (
      <div>
        <audio id="audio-element">
          <source src="http://listento.ardanradio.com:1059/stream/1/"></source>
        </audio>
        <Container>
          <div className="mt-5">
            <Row>
              <Col className="sm-4 mt-2">Ver 1.0</Col>
              <Col className="sm-4"></Col>
              <Col className="sm-4">
                <Input
                  id="cariChannels"
                  type="text"
                  placeholder="Search Here...."
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
                          <Table.Row className="tableHere">

                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.freqCha}</Table.Cell>
                            <Table.Cell>

                              <Button id={item.id} onClick={this.playChannel} name="btnToCatch">
                                Play
                              </Button>
                              <Button onClick={this.pushButtonStopPlay}>Stop</Button>
                            </Table.Cell>
                          </Table.Row>
                        )
                      )
                    }


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
