import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from './HomeComponent';
import ReservationComponent from './ReservationComponent';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/about" element={<AboutComponent />}></Route>
        <Route path="/menu" element={<MenuComponent />}></Route> */}
        <Route path="/reservations" element={<ReservationComponent />}></Route>
        {/* <Route path="/order" element={<OrderComponent />}></Route> */}
      </Routes>
    </main>
  );
};
export default Main;