import React, { Component } from "react";
import { Button } from "reactstrap";

class channelChose extends Component {
  constructor(props) {
    super(props);

    this.channel1 = this.channel1.bind(this);
  }

  channel1() {
    let cha1 = document.getElementById("ch1");
    let cha2 = document.getElementById("ch2");

    cha1.play();

  }

  render() {
    return (
      <div >
        <Button id="btn1" className="mt-2" onClick={this.channel1}>
          OZ Channel
        </Button>
        

        <Button id="btn2" className="mt-2" onClick={this.channel1}>
          OZ Channel2
        </Button>
       

        <audio id="ch1" contextMenu>
          <source src="http://listento.ardanradio.com:1059/stream/1/" type="audio/ogg" />
        </audio>
        <audio id="ch2" contextMenu>
          <source src="http://masima.rastream.com/masima-pramborsjakarta?" type="audio/ogg" />
        </audio>
      </div>
    );
  }
}

export default channelChose;
