import React from "react";
import {Button, Label, Form, FormGroup, Input, FormFeedback} from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from 'yup';

const Reservation = () =>  {
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
      guests: Yup.string().required('Required').min(1, 'Number should be 1 or greater').max(10, 'Number should be 10 or less'),
    }),
  });

  const handleSubmit = (values) => {
    alert("Date: " + values.date.value + " Time: " + values.time.value
      + " Guests: " + values.guests.value + "Occasion: " + values.occasion.value);
    formik.resetForm();
  };

  return(
    <div className="container">
      <h1 id="contactme-section">
        Contact me
      </h1>
      <Form onSubmit={formik.handleSubmit}>
       <FormGroup>
          <Label for="date">Choose a date</Label>
          <Input type="date" name="date" id="date"
            invalid={formik.errors.date && formik.touched.date}/>
          <FormFeedback>{formik.errors.date}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="time">Choose a time</Label>
          <Input type="select" name="time" id="time">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="guests">Number of guests</Label>
          <Input type="number" name="guests" id="guests"
            placeholder="Number of guests" min="1" max="10"
            invalid={formik.errors.guests && formik.touched.guests}/>
          <FormFeedback>{formik.errors.guests}</FormFeedback>
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="occasion">Occasion</Label>
          <Input type="select" name="occasion" id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </Input>
          <FormFeedback invalid={formik.errors.occasion && formik.touched.occasion}>{formik.errors.occasion}</FormFeedback>
        </FormGroup>
        <Button type="submit" className="button">
          Make your reservation
        </Button>
      </Form>
    </div>
  );
}

export default Reservation;