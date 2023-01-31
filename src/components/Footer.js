import React from "react";
import Logo from '../images/Logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className="row">
      <img src={Logo} alt="Little Lemon Restaurant" />
        <div>
          <h5>Doormat Navigation</h5>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <p>
            Address
          </p>
          <p>
            Phone number
          </p>
          <p>
            Email
          </p>
        </div>
        <div>
          <h5>Social Media Links</h5>
          <ul>
            <li>
              <a href="http://google.com/+">
                Google Plus
              </a>
            </li>
            <li>
              <a href="http://facebook.com/profile.php?id=">
                Facebook
              </a>
            </li>
            <li>
              <a href="http://linkedin.com/in">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="http://twitter.com/">
                Twitter
              </a>
            </li>
            <li>
              <a href="http://youtube.com">
                Youtube
              </a>
            </li>
            <li>
              <a href="mailto:">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;