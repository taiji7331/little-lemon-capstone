import React, {useReducer, useState} from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import HomePage from './HomeComponent';
import ReservationForm from './ReservationForm';
import ConfirmedReservation from './ConfirmedReservation';
import {fetchAPI, submitAPI} from '../api.js';

const Main = () => {

  function initializeTimes() {
    const date = new Date();
    return fetchAPI(date);
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, {}, initializeTimes);

  const [time, setTime] = useState("");

  const navigate = useNavigate();

  function updateTimes(state, action) {
    const inputDate = new Date(action.date);
    const newTimes = fetchAPI(inputDate);
    return newTimes;
  }

  function submitForm(date, time, guests, occasion) {
    const formData = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion
    }
    if (submitAPI(formData)) {
      console.log(JSON.stringify(formData));
      navigate("/confirmation");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/about" element={<AboutComponent />}></Route>
        <Route path="/menu" element={<MenuComponent />}></Route> */}
        <Route path="/reservations" element={<ReservationForm
            times={availableTimes} time={time} setTime={setTime}
            dispatch={dispatch} submit={submitForm}/>}></Route>
        {/* <Route path="/order" element={<OrderComponent />}></Route> */}
        <Route path="/confirmation" element={<ConfirmedReservation />}></Route>
      </Routes>
    </main>
  );
};
export default Main;