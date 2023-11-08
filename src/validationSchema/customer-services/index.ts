import * as yup from 'yup';

export const customerServiceValidationSchema = yup.object().shape({
  service_type: yup.string().required(),
  service_description: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
