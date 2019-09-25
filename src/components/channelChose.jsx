import React, { Component } from "react";
import { Button } from "reactstrap";

class channelChose extends Component {

  constructor(props) {
    super(props);

    this.state = { clicks: 0};

    this.channel1 = this.channel1.bind(this);
    this.channelStop = this.channelStop.bind(this);
  }
  
  channel1() {
    let cha1 = document.getElementById("ch1");
    let btn1 = document.getElementById("btn1");
    let btn0 = document.getElementById("btn");

    this.setState(state =>({
      clicks: state.clicks + 1
    }));

    const str1 = parseInt(this.state.clicks);

    if (str1 == true){
      console.log('Yes');
    }else{
      console.log('No')
    }

    console.log(this.state);    
  }

  channelStop() {
    let cha1 = document.getElementById("ch1");
    let cha2 = document.getElementById("ch2");
    cha1.pause();
  }

  render() {
    return (
      <div>
        <Button id="btn1" value="1" className="mt-2" onClick={this.channel1}>
          OZ Channel
        </Button>
          
        <Button id="btn" value="0" className="mt-2" onClick={this.channelStop}>
          Stop
        </Button>

        <audio id="ch1" contextMenu>
          <source
            src="http://listento.ardanradio.com:1059/stream/1/"
            type="audio/ogg"
          />
        </audio>
        <audio id="ch2" contextMenu>
          <source
            src="http://masima.rastream.com/masima-pramborsjakarta?"
            type="audio/ogg"
          />
        </audio>
      </div>
    );
  }
}

export default channelChose;
