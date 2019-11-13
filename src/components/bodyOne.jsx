import React, { Component } from "react";
import { Row, Col, Container, Input } from "reactstrap";
import { Table, Button, Card, Image, Icon, Progress, Segment } from "semantic-ui-react";
import '../css/fotoStyle.css'

import ImageBens from "./imagesInside/bens.png";
import ImageFajri from "./imagesInside/fajri.png";
import ImageHardrock from "./imagesInside/hardrock.png";
import ImageKisi from "./imagesInside/kisi.png";
import ImageMustang from "./imagesInside/mustang.png";

class bodyOne extends Component {
  constructor() {
    super();
    this.state = {
      channelsRadio: [
        {
          id: 0,
          progressBar: 0,
          idStop: "0",
          img: ImageBens,
          name: "Bens Radio",
          freqCha: "106,2 FM",
          audioSrc: (
            <audio id="audio-element1" className="audio1">
              <source src="http://175.103.58.72:8000/;"></source>
            </audio>
          )
        },
        {
          id: 1,
          progressBar: 0,
          idStop: "0",
          img: ImageFajri,
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
          progressBar: 0,
          idStop: "0",
          img: ImageHardrock,
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
          progressBar: 0,
          idStop: "0",
          img: ImageKisi,
          name: "KISI FM",
          freqCha: "93,4 FM",
          audioSrc: (
            <audio id="audio-element4" className="audio1">
              <source src="http://live.kisifm.com:9340/kisifm"></source>
            </audio>
          )
        },
        {
          id: 4,
          progressBar: 0,
          idStop: "0",
          img: ImageMustang,
          name: "Mustang FM",
          freqCha: "88,0 FM",
          audioSrc: (
            <audio id="audio-element5" className="audio1">
              <source src="http://103.246.184.34:8000/mustang"></source>
            </audio>
          )
        },
        {
          id: 5,
          progressBar: 0,
          idStop: "0",
          img: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
          name: "RAS FM",
          freqCha: "93,4 FM",
          audioSrc: (
            <audio id="audio-element6" className="audio1">
              <source src="http://103.28.148.18:9006/;"></source>
            </audio>
          )
        }
      ]
    };

    this.playChannel = this.playChannel.bind(this);
    this.pushButtonStopPlay = this.pushButtonStopPlay.bind(this);
    this.searchChannel = this.searchChannel.bind(this);
  }

  searchChannel = e => {
    this.callCariChannels = document.getElementById("cariChannels");
    this.callCariChannelsValue = this.callCariChannels.value;
    this.cariLowLetter = this.callCariChannelsValue.toLowerCase();

   

  };

  playChannel = event => {
    this.catchAudio1 = document.getElementById("audio-element1");
    this.catchAudio2 = document.getElementById("audio-element2");
    this.catchAudio3 = document.getElementById("audio-element3");
    this.catchAudio4 = document.getElementById("audio-element4");
    this.catchAudio5 = document.getElementById("audio-element5");
    this.catchAudio6 = document.getElementById("audio-element6");

    this.progressBar1 = document.getElementById("progressBar1");   

    /* Catch Button List from map ChannelsRadio --> id */
    const catchButtonOnlyId = event.target.getAttribute("id");

    if (catchButtonOnlyId == 0) {

      let bar100 = this.state.channelsRadio
      bar100[0].progressBar = 100
      this.setState(bar100)

      this.catchAudio6.pause();
      this.catchAudio5.pause();
      this.catchAudio4.pause();
      this.catchAudio3.pause();
      this.catchAudio2.pause();
      this.catchAudio1.play();
    } else if (catchButtonOnlyId == 1) {

      let bar101 = this.state.channelsRadio
      bar101[1].progressBar = 100
      this.setState(bar101)

      this.catchAudio6.pause();
      this.catchAudio5.pause();
      this.catchAudio4.pause();
      this.catchAudio3.pause();
      this.catchAudio1.pause();
      this.catchAudio2.play();
    } else if (catchButtonOnlyId == 2) {

      let bar102 = this.state.channelsRadio
      bar102[2].progressBar = 100
      this.setState(bar102)

      this.catchAudio6.pause();
      this.catchAudio5.pause();
      this.catchAudio4.pause();
      this.catchAudio2.pause();
      this.catchAudio1.pause();
      this.catchAudio3.play();
    } else if (catchButtonOnlyId == 3) {

      let bar103 = this.state.channelsRadio
      bar103[3].progressBar = 100
      this.setState(bar103)

      this.catchAudio6.pause();
      this.catchAudio5.pause();
      this.catchAudio2.pause();
      this.catchAudio1.pause();
      this.catchAudio3.pause();
      this.catchAudio4.play();
    } else if (catchButtonOnlyId == 4) {

      let bar104 = this.state.channelsRadio
      bar104[4].progressBar = 100
      this.setState(bar104)

      this.catchAudio6.pause();
      this.catchAudio4.pause();
      this.catchAudio3.pause();
      this.catchAudio2.pause();
      this.catchAudio1.pause();
      this.catchAudio5.play();
    } else if (catchButtonOnlyId == 5) {

      let bar105 = this.state.channelsRadio
      bar105[5].progressBar = 100
      this.setState(bar105)

      this.catchAudio5.pause();
      this.catchAudio4.pause();
      this.catchAudio3.pause();
      this.catchAudio2.pause();
      this.catchAudio1.pause();
      this.catchAudio6.play();
    }
  };

  pushButtonStopPlay = event => {
    this.catchAudio1.pause();
    this.catchAudio2.pause();
    this.catchAudio3.pause();
    this.catchAudio4.pause();
    this.catchAudio5.pause();
    this.catchAudio6.pause();

    let bar0 = this.state.channelsRadio;
    bar0[0].progressBar = 0
    this.setState(bar0)

    let bar1 = this.state.channelsRadio;
    bar0[1].progressBar = 0
    this.setState(bar1)
    
    let bar2 = this.state.channelsRadio;
    bar0[2].progressBar = 0
    this.setState(bar2)

    let bar3 = this.state.channelsRadio;
    bar0[3].progressBar = 0
    this.setState(bar3)

    let bar4 = this.state.channelsRadio;
    bar0[4].progressBar = 0
    this.setState(bar4)

    let bar5 = this.state.channelsRadio;
    bar0[5].progressBar = 0
    this.setState(bar5)

  };

  render() {
    return (
      <div>
        <Container>
          <div className="mt-5">
            <Row>
              <Col className="sm-4 mt-2">Ver 1.0</Col>
              <Col className="sm-4">
                {/*<Button>Mode Biasa</Button> | <Button>Mode Keren</Button>*/}
              </Col>
              <Col className="sm-4">
                <Input
                  id="cariChannels"
                  type="text"
                  placeholder="Search Here...."
                  onChange={this.searchChannel}
                />
              </Col>
            </Row>
          </div>
        </Container>
        <Row className="ml-2 mr-2 mb-2">
          <Col>
            <br />
            <Card.Group className="fotoLists" >
              {this.state.channelsRadio.map((item, key) => (
                <Card>
                  {item.audioSrc}
                  <Image src={item.img} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Meta>
                      <span className="date">{item.freqCha}</span>
                      <br/>
                      <span><Progress id="progressBar1" percent={item.progressBar} color="" /></span>
                    </Card.Meta>
                    <Card.Description>
                      <Button id={item.id} onClick={this.playChannel}>
                        Play
                      </Button>
                      <Button
                        id={item.id}
                        onClick={this.pushButtonStopPlay}
                      >Stop</Button>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      22 Friends
                    </a>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Col>
        </Row>
      </div>
    );
  }
}

export default bodyOne;
