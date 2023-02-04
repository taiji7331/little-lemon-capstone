import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../images/Logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <img className="col-12 col-sm-2" src={Logo} alt="Little Lemon Restaurant" />
          <div className="col-auto offset-sm-2">
            <h5>Doormat Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li>
                <Link to="/menu" className="nav-link">Menu</Link>
              </li>
              <li>
                <Link to="/reservations" className="nav-link">Reservations</Link>
              </li>
              <li>
                <Link to="/order" className="nav-link">Order Online</Link>
              </li>
            </ul>
          </div>
          <div className="col-auto offset-sm-2">
            <h5>Contact</h5>
            <address>
              111 Main St.<br />
              Chicago, Illinois<br />
              60007 USA<br />
              <i className="fa fa-phone fa-lg"></i>: +1 (234) 567-8910<br />
              <i className="fa fa-fax fa-lg"></i>: +1 (234) 567-8911<br />
              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:littlelemon@food.net">
                littlelemon@food.net
              </a>
            </address>
          </div>
          <div className="col-12 align-self-center">
            <div className="text-center">
              <h5>Social Media Links</h5>
              <a className="btn btn-social-icon btn-google" href="http://google.com/+">
                <i className="fa fa-google-plus"></i>
              </a>
              <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/profile.php?id=">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com/in">
                <i className="fa fa-linkedin"></i>
              </a>
              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="btn btn-social-icon btn-google" href="http://youtube.com">
                <i className="fa fa-youtube"></i>
              </a>
              <a className="btn btn-social-icon" href="mailto:littlelemon@food.net">
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;