export const ROUTES = {
  login: '/web/index.php/auth/login',
  dashboard: '/web/index.php/dashboard/index',
  pimList: '/web/index.php/pim/viewEmployeeList',
  addEmployee: '/web/index.php/pim/addEmployee',

  // Employment Status
  // employmentStatus: '/web/index.php/admin/employmentStatus',
  saveEmploymentStatus: '/web/index.php/admin/saveEmploymentStatus',

  addPayGrade : '/web/index.php/admin/payGrade'
} as const;
