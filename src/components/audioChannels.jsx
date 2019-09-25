import React, { Component } from "react";

class audioChannels extends Component {
  state = {};
  render() {
    return (
      <div>
        <audio
          id="ch1"
          src="http://listento.ardanradio.com:1059/stream/1/"
          type="audio/ogg"
          contextMenu
        />
        <audio
          id="ch2"
          src="http://202.137.4.147:8000/;"
          type="audio/ogg"
          contextMenu
        />
      </div>
    );
  }
}

export default audioChannels;
