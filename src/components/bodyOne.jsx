import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { Table, Button } from "semantic-ui-react";
import AudioChannels from "./audioChannels";

class bodyOne extends Component {
  state = {
<<<<<<< HEAD
    dbaseChannels : ["Ali", "Damam"]
      
  };
=======
    jenis: ["dangdut", "Jazz", "Keroncong"]
  }

  
    
  
>>>>>>> 6900e5890de35518d0f3086e8a809854d545a64d

  constructor(){
    super();

<<<<<<< HEAD
    this.showListed = this.showListed.bind(this);
  }

  showListed(){
    console.log("Mantap")
  }

 
=======
    
    this.channelStop = this.channelStop.bind(this);    
    this.showTableListed = this.showTableListed.bind(this);
  }

  channelStop() {
    
  }

  showTableListed(){
    // let takeTable = document.getElementById("tblMe");
    let b = this.state.jenis[0]

    console.log(b)
    
  }
>>>>>>> 6900e5890de35518d0f3086e8a809854d545a64d

  
  render() {
    
<<<<<<< HEAD
=======
    

>>>>>>> 6900e5890de35518d0f3086e8a809854d545a64d
    return (
      <div>
        <AudioChannels />
        <Container>
          <Row>
            <Col className="sm-4">
              <text></text>
            </Col>
            <Col className="sm-4">
              <text></text>
            </Col>
            <Col className="sm-4">
              <text className="text-rigth">Ver 1.0</text>
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
                  <Table.Row>
                    <Table.Cell>{this.showListed}</Table.Cell>
                    <Table.Cell>200</Table.Cell>
                    <Table.Cell>
                      <Button id="btn1" value="1" onClick={this.channel1}>
                        Play
                      </Button>
                      <Button onClick={this.channelStop}>Stop</Button>
                      {/* <Button>{this.state.jenis.map((todo, index) => `<Button>${todo}</Button>`)}</Button> */}
                    </Table.Cell>
                  </Table.Row>
<<<<<<< HEAD
=======

                  {
                   
                    
                    this.state.jenis.map((todo, index) => `
                    
                    ${todo}
                  
                  `)}

>>>>>>> 6900e5890de35518d0f3086e8a809854d545a64d
                  {/* <Table.Row>
                    <Table.Cell>Elshinta FM</Table.Cell>
                    <Table.Cell>310</Table.Cell>
                    <Table.Cell>
                      <Button id="btn2" value="1" onClick={this.channel1}>
                        Play2
                      </Button>
                      <Button onClick={this.channelStop}>Stop</Button>
                    </Table.Cell>
                  </Table.Row> */}
                </Table.Body>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default bodyOne;
