import React, {useState} from "react";
import {Button, Label, Form, FormGroup, Input, FormFeedback} from 'reactstrap';

const ReservationForm = (props) => {

  const [date, setDate] = useState("");

  const [guests, setGuests] = useState("1");

  const [occasion, setOccasion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Date: ${date}\nTime: ${props.time}\nGuests: ${guests}\noccasion: ${occasion}`)
  }

  const occasions = ['Birthday', 'Anniversary'];

  const guestLabels = [...Array(10),].map((e, i) => (
    <option id={i + 1} key={i + 1}>{i + 1}</option>
  ));

  return(
    <Form onSubmit={handleSubmit} className="form">
      <FormGroup>
        <Label for="date">Choose a date</Label>
        <Input type="date" name="date" id="date" onChange={(e) => [setDate(e.target.value), props.dispatch({date: e.target.value})]}
          />
        <FormFeedback></FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="time">Choose a time</Label>
        <Input type="select" name="time" id="time" onChange={(e) => props.setTime(e.target.value)}>
          {props.times.map( (x,y) =>
            <option key={y}>{x}</option> )}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="guests">Number of guests</Label>
        <input type="range" list="values" name="guests" id="guests" min="1" max="10" value={guests}
          onChange={(e) => setGuests(e.target.value)}/>
        <datalist id="values">
          {guestLabels}
        </datalist>
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="occasion">Occasion</Label>
        <Input type="select" name="occasion" id="occasion" onChange={(e) => setOccasion(e.target.value)}>
          {occasions.map( (x,y) =>
            <option key={y}>{x}</option> )}
        </Input>
      </FormGroup>
      <Button type="submit" className="button">
        Make your reservation
      </Button>
    </Form>
  );
}

export default ReservationForm;