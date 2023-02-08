import React from "react";
import ReservationForm from './ReservationForm';

const Reservation = (props) => {
  return(
    <div className="container">
      <h1>Reserve a Table</h1>
      <ReservationForm times={props.times} time={props.time}
          setTime={props.setTime} dispatch={props.dispatch} submit={props.submit} />
    </div>
  );
}

export default Reservation;