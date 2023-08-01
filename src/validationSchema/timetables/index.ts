import * as yup from 'yup';

export const timetableValidationSchema = yup.object().shape({
  subject: yup.string().required(),
  time: yup.date().required(),
  student_id: yup.string().nullable(),
  teacher_id: yup.string().nullable(),
});
