import { ExaminationInterface } from 'interfaces/examination';
import { TimetableInterface } from 'interfaces/timetable';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  name: string;
  attendance?: number;
  academic_record?: number;
  behavior_record?: number;
  health_record?: number;
  admission_status?: boolean;
  enrollment_status?: boolean;
  fee_status?: boolean;
  parent_info?: string;
  school_id?: string;
  created_at?: any;
  updated_at?: any;
  examination?: ExaminationInterface[];
  timetable?: TimetableInterface[];
  school?: SchoolInterface;
  _count?: {
    examination?: number;
    timetable?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  parent_info?: string;
  school_id?: string;
}
