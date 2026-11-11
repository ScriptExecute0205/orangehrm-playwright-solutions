export const ROUTES = {
  login: '/web/index.php/auth/login',
  dashboard: '/web/index.php/dashboard/index',
  pimList: '/web/index.php/pim/viewEmployeeList',
  addEmployee: '/web/index.php/pim/addEmployee',
  employmentStatus: '/web/index.php/admin/employmentStatus',
  addEmploymentStatus: '/web/index.php/admin/saveEmploymentStatus',
  jobCategory: '/web/index.php/admin/jobCategory',
  addJobCategory: '/web/index.php/admin/saveJobCategory',
  jobTitles: '/web/index.php/admin/viewJobTitleList',
  addJobTitles: '/web/index.php/admin/saveJobTitle'

} as const;
