import React, { Component } from "react";

class audioChannels extends Component {
  state = {};
  render() {
    return (
      <div>
        <audio
          id="audioAll"
          type="audio/ogg"
          contextMenu
        />
      </div>
    );
  }
}

export default audioChannels;
