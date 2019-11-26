import React, { Component } from "react";
import { Table, Header } from "reactstrap";
import "../css/fotoStyle.css";
import ImageFooter from "./imagesInside/radioaktiffooter.png";

class footerKit extends Component {
  state = {};
  render() {
    return (
      <div>
        <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Radio Aktif</th>
          <th>Ver 1.10</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>Powered By. Alikurniawan</th>
        </tr>
      </thead>
      </Table>
      </div>
    );
  }
}

export default footerKit;
