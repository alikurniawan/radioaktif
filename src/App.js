import React from "react";
import { Container } from "reactstrap";
import ChannelChose from "./components/channelChose";
import "./App.css";

function App() {
  return (
    <div >
      <Container>
        <div className="radioBg">
          <div className="marginUpRad">
          <ChannelChose />
          </div>
        
        </div>
        
      </Container>
    </div>
  );
}

export default App;
