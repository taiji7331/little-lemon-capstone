import { render, screen, fireEvent } from "@testing-library/react";
import ReservationForm from '../components/ReservationForm';

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

test("Dispatch is being called when date changed", async () => {
  const timesArray = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const date = '2023-02-10';
  const dispatch = jest.fn();
  const props = {
    times: timesArray,
    dispatch: dispatch
  }
  render(<ReservationForm dispatch={props.dispatch} times={['17:00']} />);
  var option = screen.getByRole('option', { name: '17:00' });
  expect(option).toBeInTheDocument();

  const dateInput = screen.getByLabelText(/Choose a date/);
  fireEvent.change(dateInput, {target: {value: date}});

  expect(dispatch).toHaveBeenCalled();
  expect(dispatch).toHaveBeenCalledWith({date: date});
});