import React from "react";
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import Food from '../images/restauranfood.jpg';

function CallToAction() {

  return(
    <section className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-4 offset-sm-2">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button className="button">
              <Link to="/reservations" className="nav-link">Reserve a Table</Link>
            </Button>
          </div>
          <div className="col-5 offset-1 d-none d-sm-block">
            <img src={Food} alt="Little Lemon Restaurant" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;