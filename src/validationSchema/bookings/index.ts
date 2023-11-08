import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_date: yup.date().required(),
  seat_number: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  flight_id: yup.string().nullable().required(),
});
