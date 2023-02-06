import React from "react";
import ReservationForm from './ReservationForm';

const Reservation = () => {
  return(
    <div className="container">
      <h1>Reserve a Table</h1>
      <ReservationForm />
    </div>
  );
}

export default Reservation;