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
          "idStop": "0",
          "name": "Bens Radio",
          "freqCha": "106,2 FM",
          "audioSrc": <audio id="audio-element" className="audio1">
                        <source src="http://175.103.58.72:8000/;"></source>
                      </audio>
        },
        {
          "id": 1,
          "idStop": "0",
          "name": "Fajri Radio",
          "freqCha": "99,3 FM",
          "audioSrc": <audio id="audio-element2" className="audio1">
                        <source src="http://coloid.fajrifm.com:9930/;"></source>
                      </audio>
        },
        {
          "id": 2,
          "idStop": "0",
          "name": "Hard Rock FM",
          "freqCha": "86,6 FM",
          "audioSrc": <audio id="audio-element3" className="audio1">
                        <source src="http://cloudstreaming.mramedia.com:8001/live"></source>
                      </audio>
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


    const catchAudio1 = document.getElementById("audio-element");
    const catchAudio2 = document.getElementById("audio-element2");
    const catchAudio3 = document.getElementById("audio-element3");
    const catchButtonOnlyId = event.target.getAttribute("id");
    const stopAudio = document.querySelector("audio");
    

      console.log(catchButtonOnlyId);

    if (catchButtonOnlyId == 0) {
      catchAudio3.pause();
      catchAudio2.pause();
      catchAudio1.play();
    } else if (catchButtonOnlyId == 1) {
      catchAudio3.pause();
      catchAudio1.pause();
      catchAudio2.play();
    } else if (catchButtonOnlyId == 2) {
      catchAudio2.pause();
      catchAudio1.pause();
      catchAudio3.play();
    } else {
      stopAudio.pause();
    }

  };

  pushButtonStopPlay = (event) => {

    const testTake = document.getElementsByClassName("audio1")[0];

    console.log(testTake)

  }

  render() {

    return (
      <div>
        
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
                            {item.audioSrc} 
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.freqCha}</Table.Cell>
                            <Table.Cell>
                              <Button id={item.id} onClick={this.playChannel}>
                                Play
                              </Button>
                              {/* <Button id="stopButton" onClick={this.pushButtonStopPlay}>Stop</Button> */}
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
