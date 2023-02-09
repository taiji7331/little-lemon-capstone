import React, {Component} from "react";
import {Button, Label, Form, FormGroup, Input, FormFeedback} from 'reactstrap';

const occasions = ['Birthday', 'Anniversary'];

const guestLabels = [...Array(10),].map((e, i) => (
  <option id={i + 1} key={i + 1}>{i + 1}</option>
));

class ReservationForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: '',
      guests: '1',
      occasion: '',
      validate: {
        dateState: '',
        timeState: '',
        occasionState: ''
      },
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.validateDate = this.validateDate.bind(this);
    this.validateTime = this.validateTime.bind(this);
    this.validateOccasion = this.validateOccasion.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state.date, this.props.time, this.state.guests, this.state.occasion);
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  validateDate(e) {
    const { validate } = this.state;

    if (e.target.value.length > 0) {
      validate.dateState = 'has-success';
    } else {
      validate.dateState = 'has-danger';
    }

    this.setState({ validate });
  }

  validateTime(e) {
    const { validate } = this.state;

    if (e.target.value.length > 0
      && e.target.value !== 'Select a time...') {
      validate.timeState = 'has-success';
    } else {
      validate.timeState = 'has-danger';
    }

    if (e.target.id === 'date') {
      validate.timeState = 'has-danger';
    }

    this.setState({ validate });
  }

  validateOccasion(e) {
    const { validate } = this.state;

    if (e.target.value.length > 0
      && e.target.value !== 'Select an occasion...') {
      validate.occasionState = 'has-success';
    } else {
      validate.occasionState = 'has-danger';
    }

    this.setState({ validate });
  }

  render() {
    const isEnabled = this.state.date.length > 0
      && (this.state.occasion.length > 0 && this.state.occasion !== 'Select an occasion...')
      && (this.props.time.length > 0 && this.props.time !== 'Select a time...');

    return(
      <div className="container">
        <h1>Reserve a Table</h1>
        <Form onSubmit={(event, values) => this.handleSubmit(event, values)}
          className="form" data-testid='form'>
          <FormGroup>
            <Label for="date">Choose a date</Label>
            <Input required type="date" name="date" id="date" value={this.state.date}
              onChange={(e) => [this.handleUserInput(e), this.validateDate(e), this.validateTime(e),
                  this.props.dispatch({date: e.target.value}), this.props.setTime('')]}
              onBlur={(e => this.validateDate(e))}
              valid={ this.state.validate.dateState === 'has-success' }
              invalid={ this.state.validate.dateState === 'has-danger' }
              />
            <FormFeedback>
              Please choose a date for your reservation.
            </FormFeedback>
            <FormFeedback valid>
              Looks good.
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="time">Choose a time</Label>
            <Input type="select" name="time" id="time" value={this.props.time}
              onChange={(e) => [this.props.setTime(e.target.value), this.validateTime(e)]}
              onBlur={(e => this.validateTime(e))}
              valid={ this.state.validate.timeState === 'has-success' }
              invalid={ this.state.validate.timeState === 'has-danger' }>
                <option>Select a time...</option>
              {this.props.times.map( (x,y) =>
                <option key={y}>{x}</option> )}
            </Input>
            <FormFeedback>
              Please choose a time for your reservation.
            </FormFeedback>
            <FormFeedback valid>
              Looks good.
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="guests">Number of guests</Label>
            <input type="range" list="values" name="guests" id="guests" min="1" max="10"
              value={this.state.guests}
              onChange={(e) => this.handleUserInput(e)} />
            <datalist id="values">
              {guestLabels}
            </datalist>
          </FormGroup>
          <FormGroup className="form-group">
            <Label for="occasion">Occasion</Label>
            <Input type="select" name="occasion" id="occasion" value={this.state.occasion}
              onChange={(e) => this.handleUserInput(e)}
              onBlur={(e => this.validateOccasion(e))}
              valid={ this.state.validate.occasionState === 'has-success' }
              invalid={ this.state.validate.occasionState === 'has-danger' }>
                <option>Select an occasion...</option>
              {occasions.map( (x,y) =>
                <option key={y}>{x}</option> )}
            </Input>
            <FormFeedback>
              Please choose an occasion for your reservation.
            </FormFeedback>
            <FormFeedback valid>
              Looks good.
            </FormFeedback>
          </FormGroup>
          <Button disabled={!isEnabled} type="submit" className="button">
            Make your reservation
          </Button>
        </Form>
      </div>
    );
  }
}

export default ReservationForm;