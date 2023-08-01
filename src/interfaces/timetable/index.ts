import { StudentInterface } from 'interfaces/student';
import { TeacherInterface } from 'interfaces/teacher';
import { GetQueryInterface } from 'interfaces';

export interface TimetableInterface {
  id?: string;
  student_id?: string;
  teacher_id?: string;
  subject: string;
  time: any;
  created_at?: any;
  updated_at?: any;

  student?: StudentInterface;
  teacher?: TeacherInterface;
  _count?: {};
}

export interface TimetableGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  teacher_id?: string;
  subject?: string;
}
