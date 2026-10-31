import { test as base } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { DashboardPage } from '@pages/dashboard.page';
import { SidebarComponent } from '@components/sidebar.component';
import { TopBarComponent } from '@components/topbar.component';
import { ToastComponent } from '@components/toast.component';

type Fixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  sidebar: SidebarComponent;
  topBar: TopBarComponent;
  toast: ToastComponent;
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
});

export { expect } from '@playwright/test';
