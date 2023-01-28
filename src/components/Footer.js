import React from "react";
import { ReactComponent as Logo } from '../images/Logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <Logo />
          <div className="col-4 offset-1 col-sm-2">
            <h5>Doormat Navigation</h5>
            <ul className="list-unstyled">
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
          <div className="col-7 col-sm-5">
            <h5>Contact</h5>
            <address>
              Address
            </address>
            <div>
              Phone number
            </div>
            <div>
              Email
            </div>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <h5>Social Media Links</h5>
            <div className="text-center">
              <a className="btn btn-social-icon btn-google" href="http://google.com/+">
                <i className="fa fa-google-plus"></i>
                Google Plus
              </a>
              <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/profile.php?id=">
                <i className="fa fa-facebook"></i>
                Facebook
              </a>
              <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com/in">
                <i className="fa fa-linkedin"></i>
                LinkedIn
              </a>
              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                <i className="fa fa-twitter"></i>
                Twitter
              </a>
              <a className="btn btn-social-icon btn-google" href="http://youtube.com">
                <i className="fa fa-youtube"></i>
                Youtube
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o"></i>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;