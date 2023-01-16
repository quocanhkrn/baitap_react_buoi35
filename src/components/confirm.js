import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Confirm extends Component {
  render() {
    let { choosingStatus, rejectChoice } = this.props;

    let getChoosingTotal = () => {
      let total = choosingStatus.reduce((currentTotal, seat) => {
        return currentTotal + seat.price;
      }, 0);
      return (
        <tr>
          <td className="title" scope="row">
            Tổng cộng
          </td>
          <td className="price total">{total.toLocaleString("en-US")}</td>
          <td></td>
        </tr>
      );
    };

    return (
      <div className="confirm col-12 col-lg-4 col-xl-5">
        <h4 className="title">XÁC NHẬN</h4>
        <table className="table">
          <thead>
            <tr>
              <th className="title" scope="col">
                Số ghế
              </th>
              <th className="title" scope="col">
                Giá
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {choosingStatus.map((seat, index) => {
              return (
                <tr key={index}>
                  <td scope="row">{seat.seatNo}</td>
                  <td className="price">{seat.price.toLocaleString("en-US")}</td>
                  <td>
                    <button
                      onClick={() => {
                        rejectChoice(seat.seatNo);
                      }}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
            {getChoosingTotal()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    choosingStatus: state.seatingReducer.choosingStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    rejectChoice: (seatNo) => {
      const Action = {
        type: "REJECT_CHOICE",
        payload: seatNo,
      };
      dispatch(Action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
