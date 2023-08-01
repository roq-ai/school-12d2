import * as yup from 'yup';

export const teacherValidationSchema = yup.object().shape({
  name: yup.string().required(),
  subject: yup.string().required(),
  school_id: yup.string().nullable(),
});
