import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import { connect } from "react-redux";

class SeatingPlan extends Component {
  render() {
    let { seatingStatus, choose } = this.props;

    return (
      <div className="seating-plan col-12 col-lg-8 col-xl-7">
        <h4 className="title">SƠ ĐỒ CHỖ NGỒI</h4>
        <div className="screen">SCREEN</div>
        <div className="seating">
          <table className="table">
            <tbody>
              {seatingStatus.map((row, index) => {
                if (!row.hang) {
                  return (
                    <tr key={index}>
                      <td></td>
                      {row.danhSachGhe.map((seat, index) => {
                        return (
                          <td key={index} scope="col">
                            {seat.soGhe}
                          </td>
                        );
                      })}
                    </tr>
                  );
                } else {
                  return (
                    <tr key={index}>
                      <td scope="row">{row.hang}</td>
                      {row.danhSachGhe.map((seat, index) => {
                        return (
                          <td key={index}>
                            <button
                              className={seat.daDat ? "reserved" : ""}
                              onClick={(e) => {
                                if (!seat.daDat) {
                                  e.target.classList.toggle("choosing");
                                  choose(seat.soGhe, seat.gia);
                                }
                              }}></button>
                          </td>
                        );
                      })}
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatingStatus: state.seatingReducer.seatingStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    choose: (seatNo, price) => {
      const Action = {
        type: "CHOOSE",
        payload: { seatNo, price },
      };
      dispatch(Action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatingPlan);
