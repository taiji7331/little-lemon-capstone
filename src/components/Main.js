import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from './HomeComponent';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/reservations" element={<ReservationPage />}></Route>
        <Route path="/order" element={<OrderPage />}></Route> */}
      </Routes>
    </main>
  );
};
export default Main;