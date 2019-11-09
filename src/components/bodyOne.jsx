import React, { Component } from "react";
import { Row, Col, Container, Input } from "reactstrap";
import { Table, Button } from "semantic-ui-react";

class bodyOne extends Component {
  constructor() {
    super();
    this.state = {
      channelsRadio: [
        {
          id: 0,
          idStop: "0",
          name: "Bens Radio",
          freqCha: "106,2 FM",
          audioSrc: (
            <audio id="audio-element" className="audio1">
              <source src="http://175.103.58.72:8000/;"></source>
            </audio>
          )
        },
        {
          id: 1,
          idStop: "0",
          name: "Fajri Radio",
          freqCha: "99,3 FM",
          audioSrc: (
            <audio id="audio-element2" className="audio1">
              <source src="http://coloid.fajrifm.com:9930/;"></source>
            </audio>
          )
        },
        {
          id: 2,
          idStop: "0",
          name: "Hard Rock FM",
          freqCha: "86,6 FM",
          audioSrc: (
            <audio id="audio-element3" className="audio1">
              <source src="http://cloudstreaming.mramedia.com:8001/live"></source>
            </audio>
          )
        },
        {
          id: 3,
          idStop: "0",
          name: "KISI FM",
          freqCha: "93,4 FM",
          audioSrc: (
            <audio id="audio-element4" className="audio1">
              <source src="http://live.kisifm.com:9340/kisifm"></source>
            </audio>
          )
        }
      ]
    };

    this.playChannel = this.playChannel.bind(this);
    this.pushButtonStopPlay = this.pushButtonStopPlay.bind(this);
    this.searchChannel = this.searchChannel.bind(this);
  }

  searchChannel = () => {
    
    this.callTable1 = document.getElementById("tableHereId");
    
    this.state.channelsRadio.map(
      (listed) => {
        this.setState({
          channelsRadio: [
            this.callTable1 = `${listed.name}`
          ]
        })
      }
    )

  };

  playChannel = event => {
    this.catchAudio1 = document.getElementById("audio-element");
    this.catchAudio2 = document.getElementById("audio-element2");
    this.catchAudio3 = document.getElementById("audio-element3");
    this.catchAudio4 = document.getElementById("audio-element4");

    /* Catch Button List from map ChannelsRadio --> id */
    const catchButtonOnlyId = event.target.getAttribute("id");
    
    if (catchButtonOnlyId == 0) {
      this.catchAudio4.pause();
      this.catchAudio3.pause();
      this.catchAudio2.pause();
      this.catchAudio1.play();
    } else if (catchButtonOnlyId == 1) {
      this.catchAudio4.pause();
      this.catchAudio3.pause();
      this.catchAudio1.pause();
      this.catchAudio2.play();
    } else if (catchButtonOnlyId == 2) {
      this.catchAudio4.pause();
      this.catchAudio2.pause();
      this.catchAudio1.pause();
      this.catchAudio3.play();
    } else if (catchButtonOnlyId == 3) {
      this.catchAudio2.pause();
      this.catchAudio1.pause();
      this.catchAudio3.pause();
      this.catchAudio4.play();
    }
  };

  pushButtonStopPlay = (event) => {
    this.catchAudio1.pause();
    this.catchAudio2.pause();
    this.catchAudio3.pause();
    this.catchAudio4.pause();
    
  };

  render() {
    return (
      <div>
        <Container>
          <div className="mt-5">
            <Row>
              <Col className="sm-4 mt-2">Ver 1.0</Col>
              <Col className="sm-4">{/*<Button>Mode Biasa</Button> | <Button>Mode Keren</Button>*/}</Col>
              <Col className="sm-4">
                <Input
                  id="cariChannels"
                  type="text"
                  
                  placeholder="Search Here...."
                  onChange={this.searchChannel}
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
                    {this.state.channelsRadio.map((item, key) => (
                      <Table.Row id="tableHereId" className="tableHere">
                        {item.audioSrc}
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.freqCha}</Table.Cell>
                        <Table.Cell>
                          <Button id={item.id} onClick={this.playChannel}>
                            Play
                          </Button>
                          <Button
                            id={item.id}
                            onClick={this.pushButtonStopPlay}
                          >
                            Stop
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    ))}
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
