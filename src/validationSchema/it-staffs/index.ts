import * as yup from 'yup';

export const itStaffValidationSchema = yup.object().shape({
  name: yup.string().required(),
  school_id: yup.string().nullable(),
});
