export const ROUTES = {
  login: '/web/index.php/auth/login',
  dashboard: '/web/index.php/dashboard/index',
  pimList: '/web/index.php/pim/viewEmployeeList',
  addEmployee: '/web/index.php/pim/addEmployee',
  employeeStatus: '/web/index.php/admin/employmentStatus',
  addEmployeeStatus: '/web/index.php/admin/saveEmploymentStatus',
  jobTitles: '/web/index.php/admin/viewJobTitleList',
  addJobTitles: '/web/index.php/admin/saveJobTitle',
  payGrades:'/web/index.php/admin/viewPayGrades',
  addPayGrades: '/web/index.php/admin/payGrade',
  jobCategories:'/web/index.php/admin/jobCategory',
  addJobCategories: '/web/index.php/admin/saveJobCategory',
  workShifts:'/web/index.php/admin/workShift',
  addWorkShifts: '/web/index.php/admin/saveWorkShifts'
} as const;
