import { render, screen, fireEvent } from "@testing-library/react";
import ReservationForm from './components/ReservationForm';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Renders the ReservationForm labels', () => {
  const props = {
    times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  }

  render(<ReservationForm times={props.times}/>);
  const dateLabel = screen.getByText("Choose a date");
  const timeLabel = screen.getByText("Choose a time");
  const guestsLabel = screen.getByText("Number of guests");
  const occasionLabel = screen.getByText("Occasion");
  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
  expect(guestsLabel).toBeInTheDocument();
  expect(occasionLabel).toBeInTheDocument();
});

test('Renders the ReservationForm button', () => {
  const props = {
    times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  }

  render(<ReservationForm times={props.times}/>);
  const reservationButton = screen.getByText("Make your reservation");
  expect(reservationButton).toBeInTheDocument();
});

test("Dispatch and submit are being called", async () => {
  const timesArray = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const date = '2023-02-10';
  const time = '17:00';
  const dispatch = jest.fn();
  const setTime = jest.fn();
  const submit = jest.fn();
  const props = {
    times: timesArray,
    dispatch: dispatch,
    setTime: setTime,
    submit: submit,
    time: ''
  }
  render(<ReservationForm dispatch={props.dispatch} times={props.times}
    setTime={props.setTime} submit={props.submit} time={props.time} />);
  var option = screen.getByRole('option', { name: '17:00' });
  expect(option).toBeInTheDocument();

  const occasionInput = screen.getByLabelText(/Occasion/);
  fireEvent.change(occasionInput, {target: {value: 'Birthday'}});

  const dateInput = screen.getByLabelText(/Choose a date/);
  fireEvent.change(dateInput, {target: {value: date}});

  expect(dispatch).toHaveBeenCalled();
  expect(dispatch).toHaveBeenCalledWith({date: date});
  expect(setTime).toHaveBeenCalled();
  expect(setTime).toHaveBeenCalledWith('');

  const timeInput = screen.getByLabelText(/Choose a time/);
  fireEvent.change(timeInput, {target: {value: time}});

  expect(setTime).toHaveBeenCalledTimes(2);
  expect(setTime).toHaveBeenCalledWith(time);

  const form = screen.getByTestId("form");
  await act (async () => {
    fireEvent.submit(form);
  });
  expect(submit).toHaveBeenCalled();
});

test('Form validation working', async () => {
  const submit = jest.fn();
  const props = {
    times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    dispatch: jest.fn(),
    setTime: jest.fn(),
    submit: submit,
    time: ''
  }

  render(<ReservationForm dispatch={props.dispatch} times={props.times}
    setTime={props.setTime} submit={props.submit} time={props.time} />);
  const dateInput = screen.getByLabelText(/Choose a date/);
  const timeInput = screen.getByLabelText(/Choose a time/);
  const guestsInput = screen.getByLabelText(/Number of guests/);
  const occasionInput = screen.getByLabelText(/Occasion/);

  await act (async () => {
    fireEvent.change(dateInput, {target: {value: '2023-02-14'}});
    fireEvent.change(timeInput, {target: {value: '17:00'}});
    fireEvent.change(occasionInput, {target: {value: 'Birthday'}});
    fireEvent.blur(occasionInput);
    fireEvent.change(guestsInput, {target: {value: '2'}});
  });
  expect(dateInput).toHaveAttribute('aria-invalid', 'false');
  expect(timeInput).toHaveAttribute('aria-invalid', 'false');
  expect(occasionInput).toHaveAttribute('aria-invalid', 'false');

  await act (async () => {
    fireEvent.change(dateInput, {target: {value: ''}});
    fireEvent.change(occasionInput, {target: {value: 'Select an occasion...'}});
    fireEvent.blur(occasionInput);
    fireEvent.change(guestsInput, {target: {value: '1'}});
  });
  expect(screen.getByLabelText(/Choose a date/)).toHaveAttribute('aria-invalid', 'true');
  expect(screen.getByLabelText(/Choose a time/)).toHaveAttribute('aria-invalid', 'true');
  expect(screen.getByLabelText(/Occasion/)).toHaveAttribute('aria-invalid', 'true');
  expect(screen.getByText(/Make your reservation/)).toHaveClass('disabled');

});