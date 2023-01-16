import React, { Component } from "react";
import SeatingPlan from "./seating-plan";
import Confirm from "./confirm";

export default class Booking extends Component {
  render() {
    return (
      <div className="row">
        <SeatingPlan />
        <Confirm />
      </div>
    );
  }
}
