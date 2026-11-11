import { test as base, type Page } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { DashboardPage } from '@pages/dashboard.page';
import { SidebarComponent } from '@components/sidebar.component';
import { TopBarComponent } from '@components/topbar.component';
import { ToastComponent } from '@components/toast.component';
import { AddEmployeePage } from '@pages/add-employee.page';
import { Employee } from '@app-types/employee.types';
import { createEmployee } from '@data/factories/employee.factory';
import { AddEmploymentStatusPage } from '@pages/add-employment-status.page';
import { AddJobCategoryPage } from '@pages/add-job-category.page';
import { AddJobTitlePage } from '@pages/add-job-titles.page';

type Fixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  sidebar: SidebarComponent;
  topBar: TopBarComponent;
  toast: ToastComponent;
  addEmployeePage: AddEmployeePage;
  addEmploymentStatusPage: AddEmploymentStatusPage;
  addJobCategoryPage: AddJobCategoryPage;
  addJobTitlePage: AddJobTitlePage;
  employee : Employee;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  sidebar: async ({ page }, use) => {
    await use(new SidebarComponent(page));
  },
  topBar: async ({ page }, use) => {
    await use(new TopBarComponent(page));
  },
  toast: async ({ page }, use) => {
    await use(new ToastComponent(page));
  },

  addEmployeePage : async ({ page }, use) => {
    await use(new AddEmployeePage(page));
  },

  addEmploymentStatusPage : async ({ page }, use) => {
    await use(new AddEmploymentStatusPage(page));
  },

  addJobCategoryPage : async ({ page }, use) => {
    await use(new AddJobCategoryPage(page));
  },

  addJobTitlePage: async ({ page }: { page: Page }, use: (addJobTitlePage: AddJobTitlePage) => Promise<void>) => {
    await use(new AddJobTitlePage(page));
  },

  employee : async ({addEmployeePage, page}, use: (employee: Employee) => Promise<void>) =>
  {
    await addEmployeePage.goto();
    const employee = await addEmployeePage.addEmployee(createEmployee());
    await page.waitForURL(/viewPersonalDetails/)
    await use(employee);
  },
});

export { expect } from '@playwright/test';
