import React, { Component } from "react";
import Componenet1 from "../components/componenet1";

class board extends Component {
  render() {
    return (
      <div>
        <h1 className="text-4xl">Board View</h1>
        <Componenet1></Componenet1>
      </div>
    );
  }
}

export default board;
