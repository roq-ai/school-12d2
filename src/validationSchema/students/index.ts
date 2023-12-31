import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  attendance: yup.number().integer().nullable(),
  academic_record: yup.number().integer().nullable(),
  behavior_record: yup.number().integer().nullable(),
  health_record: yup.number().integer().nullable(),
  admission_status: yup.boolean().nullable(),
  enrollment_status: yup.boolean().nullable(),
  fee_status: yup.boolean().nullable(),
  parent_info: yup.string().nullable(),
  school_id: yup.string().nullable(),
});
