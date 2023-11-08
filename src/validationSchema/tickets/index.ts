import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  ticket_number: yup.string().required(),
  issue_date: yup.date().required(),
  price: yup.number().integer().required(),
  currency: yup.string().required(),
  booking_id: yup.string().nullable().required(),
});
