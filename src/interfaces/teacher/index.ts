import { TimetableInterface } from 'interfaces/timetable';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface TeacherInterface {
  id?: string;
  name: string;
  subject: string;
  school_id?: string;
  created_at?: any;
  updated_at?: any;
  timetable?: TimetableInterface[];
  school?: SchoolInterface;
  _count?: {
    timetable?: number;
  };
}

export interface TeacherGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  subject?: string;
  school_id?: string;
}
