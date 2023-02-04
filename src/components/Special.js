import React from "react";
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';

const Special = ({ item }) => {
  return (
    <Card className="card">
      <img src={item.getImageSrc()} alt={item.name} />
      <CardBody>
        <div className="row">
          <CardTitle className="col-9 title">{item.title}</CardTitle>
          <div className="col-3 price">$ {item.price}</div>
        </div>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
    );
};

export default Special;
