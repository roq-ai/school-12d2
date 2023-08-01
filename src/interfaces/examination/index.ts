import { StudentInterface } from 'interfaces/student';
import { GetQueryInterface } from 'interfaces';

export interface ExaminationInterface {
  id?: string;
  student_id?: string;
  subject: string;
  date: any;
  created_at?: any;
  updated_at?: any;

  student?: StudentInterface;
  _count?: {};
}

export interface ExaminationGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  subject?: string;
}
