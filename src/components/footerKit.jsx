import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import { Card } from "semantic-ui-react";
import "../css/fotoStyle.css";
import ImageFooter from "./imagesInside/radioaktiffooter.png";

class footerKit extends Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron>
          <div className="rootLists">
            <div>
              <Card image={ImageFooter} />
            </div>
            <div>
              <p>sdsdsddwdslfje ueposepoj</p>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default footerKit;
