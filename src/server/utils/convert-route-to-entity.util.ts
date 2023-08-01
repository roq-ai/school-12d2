const mapping: Record<string, string> = {
  examinations: 'examination',
  'it-staffs': 'it_staff',
  schools: 'school',
  students: 'student',
  teachers: 'teacher',
  timetables: 'timetable',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
