import * as yup from 'yup';

export const flightValidationSchema = yup.object().shape({
  airline: yup.string().required(),
  flight_number: yup.string().required(),
  departure_airport: yup.string().required(),
  arrival_airport: yup.string().required(),
  departure_time: yup.date().required(),
  arrival_time: yup.date().required(),
});
