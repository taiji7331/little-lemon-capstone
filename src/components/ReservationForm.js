import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import {Button, Label, Form, FormGroup, Input, FormFeedback} from 'reactstrap';

const Reservation = () => {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "17:00",
      guests: "",
      occasion: "Birthday"
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: Yup.object({
      date: Yup.string().required('Required'),
    }),
  });

  const handleSubmit = (values) => {
    alert("Date: " + values.date.value + " Time: " + values.time.value
      + " Guests: " + values.guests.value + "Occasion: " + values.occasion.value);
    formik.resetForm();
  };

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const occasions = ['Birthday', 'Anniversary'];

  const guestLabels = [...Array(10),].map((e, i) => (
    <option id={i + 1} key={i + 1}>{i + 1}</option>
  ));

  return(
    <Form onSubmit={formik.handleSubmit} className="form">
      <FormGroup>
        <Label for="date">Choose a date</Label>
        <Input type="date" name="date" id="date"
          invalid={formik.errors.date && formik.touched.date}/>
        <FormFeedback>{formik.errors.date}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="time">Choose a time</Label>
        <Input type="select" name="time" id="time">
          {availableTimes.map( (x,y) =>
            <option key={y}>{x}</option> )}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="guests">Number of guests</Label>
        <input type="range" list="values" name="guests" id="guests" min="1" max="10" />
        <datalist id="values">
          {guestLabels}
        </datalist>
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="occasion">Occasion</Label>
        <Input type="select" name="occasion" id="occasion">
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

export default Reservation;