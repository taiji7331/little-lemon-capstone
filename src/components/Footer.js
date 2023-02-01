import React from "react";
import Logo from '../images/Logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <img className="col-12 col-sm-2" src={Logo} alt="Little Lemon Restaurant" />
          <div className="col-6 col-sm-4">
            <h5>Doormat Navigation</h5>
            <ul className="list-unstyled">
              <li><a className="nav-link" href="/home">Home</a></li>
              <li><a className="nav-link" href="/aboutus">About</a></li>
              <li><a className="nav-link" href="/menu">Menu</a></li>
              <li><a className="nav-link" href="/contactus">Reservations</a></li>
              <li><a className="nav-link" href="/contactus">Order Online</a></li>
            </ul>
          </div>
          <div className="col-6 col-sm-6">
            <h5>Contact</h5>
            <address>
              111 Main St.<br />
              Chicago, Illinois<br />
              60007 USA<br />
              <i className="fa fa-phone fa-lg"></i>: +1 (234) 567-8910<br />
              <i className="fa fa-fax fa-lg"></i>: +1 (234) 567-8911<br />
              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                confusion@food.net
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
              <a className="btn btn-social-icon" href="mailto:">
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