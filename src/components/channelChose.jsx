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

    if(btn1 == true){
        console.log('hello');
    }else{
        console.log('no');
    }
    
  }

  // http://listento.ardanradio.com:1059/stream/1/

  render() {
    return (
      <div>
        <Button className="btn1" className="mt-2" onClick={this.channel1}>
          OZ Channel
        </Button>
        <audio id="ch1" contextMenu>
            <source src="http://listento.ardanradio.com:1059/stream/1/" type="audio/ogg" />
        </audio>
      </div>
    );
  }
}

export default channelChose;
