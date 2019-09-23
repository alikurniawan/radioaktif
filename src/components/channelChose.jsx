import React, { Component } from "react";
import { Button } from "reactstrap";

class channelChose extends Component {
  constructor(props) {
    super(props);

    this.channel1 = this.channel1.bind(this);
  }

  channel1() {
    let cha1 = document.getElementById("ch1");
    let btn1 = document.getElementById("btn1");

    let sPlay = cha1.play();
       
  }

  channelStop1(){
    let cha1 = document.getElementById("ch1");
    let sPause = cha1.pause();
  }

  // http://listento.ardanradio.com:1059/stream/1/

  render() {
    return (
      <div>
        <Button id="btn1" className="mt-2" onClick={this.channel1}>
          OZ Channel
        </Button>
        <Button id="bts1" className="mt-2" onClick={this.channelStop1}>
          OZ STOP
        </Button>
        <audio id="ch1" contextMenu>
            <source src="http://listento.ardanradio.com:1059/stream/1/" type="audio/ogg" />
        </audio>
      </div>
    );
  }
}

export default channelChose;
