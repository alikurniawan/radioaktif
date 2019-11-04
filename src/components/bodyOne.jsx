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
          "name": "Fajri Radio",
          "freqCha": "99,3 FM",
          "src": "http://coloid.fajrifm.com:9930/;"
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

   
    const catchAudio = document.getElementById("audio-element");
    const catchAudio2 = document.getElementById("audio-element2");


    const catchButtonOnlyId = event.target.getAttribute("id");

    // catchAudio.pause();
    

    if(catchButtonOnlyId == 0){
      catchAudio2.pause();
      catchAudio.play();
    }else if (catchButtonOnlyId == 1){
      catchAudio.pause();
      catchAudio2.play();
    }else if(catchButtonOnlyId == 2){
      console.log("say 2");
    }else{
      console.log("Music Off");
    }

   

  };

  pushButtonStopPlay = (event) => {
   
    const testTake = document.getElementsByClassName("audio1")[0];

    console.log(testTake)
    
  }

  render() {

    return (
      <div>
        <audio id="audio-element" className="audio1">
          <source src="http://listento.ardanradio.com:1059/stream/1/"></source>
        </audio>
        <audio id="audio-element2">
          <source src="http://coloid.fajrifm.com:9930/;"></source>
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
                              <Button id="stopButton" onClick={this.pushButtonStopPlay}>Stop</Button>
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
