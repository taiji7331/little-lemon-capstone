import React, {useReducer, useState} from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from './HomeComponent';
import ReservationComponent from './ReservationComponent';

const Main = () => {

  const initializeTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  const [time, setTime] = useState("");

  function updateTimes(state, action) {
    console.log(action.date);
    if (action.date === '2023-02-14') {
      return ['17:00'];
    }
    return initializeTimes;
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/about" element={<AboutComponent />}></Route>
        <Route path="/menu" element={<MenuComponent />}></Route> */}
        <Route path="/reservations" element={<ReservationComponent times={availableTimes} time={time} setTime={setTime} dispatch={dispatch} />}></Route>
        {/* <Route path="/order" element={<OrderComponent />}></Route> */}
      </Routes>
    </main>
  );
};
export default Main;