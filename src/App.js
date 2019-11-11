import React from "react";
import Header from "./components/header";
import "./css/homex.css";
import BodyOne from "./components/bodyOne";
import "./App.css";
import FooterKit from "./components/footerKit";

function App() {
  return (
    <div className="bodyH">
      <Header />
      <br />
      <br />
      <BodyOne />
      <br />
      <FooterKit />
    </div>
  );
}

export default App;
