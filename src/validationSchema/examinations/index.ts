import * as yup from 'yup';

export const examinationValidationSchema = yup.object().shape({
  subject: yup.string().required(),
  date: yup.date().required(),
  student_id: yup.string().nullable(),
});
