import React, { Component } from "react";
import { connect } from "react-redux";
import Booking from "./booking";

export default class Index extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="main-title">CYBERCINEMA TICKET BOOKING</h1>
        <Booking />
      </div>
    );
  }
}
