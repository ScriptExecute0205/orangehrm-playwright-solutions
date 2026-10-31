# Coding standards

## Rules (and why)

1. **No `waitForTimeout`.** A fixed wait is slow when the page is ready and fails when the page is slow. Playwright waits automatically. Use `expect(...)`.
2. **Locators in this order:** `getByRole`, `getByLabel`, `getByPlaceholder`, `getByText`. Use CSS or XPath only when nothing else works.
3. **Assertions go in test files.** Page classes do actions only.
4. **No hardcoded data.** Use factories, constants or env files.
5. **Every test works alone and in any order.** Never depend on another test.
6. **Use unique data.** The demo site is shared by many people. Create random data with a factory and search for exactly that data. Never check how many records exist.
7. **Clean up the data you create** when the scenario allows it.
8. **One scenario, one test.** A loop over data for the same scenario is fine.
9. **No `console.log`.** Use the logger.
10. **Use path aliases** (`@pages/...`), not `../../..`.
11. **Never commit** `.env`, reports or `node_modules`.

## Naming conventions

| What                    | Rule                                             | Example                                                                                          |
| ----------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Files                   | lower case with dashes and a type ending         | `login.page.ts`, `sidebar.component.ts`, `employee.factory.ts`, `role.enum.ts`, `date.helper.ts` |
| Test files              | `<feature>.spec.ts` inside `tests/e2e/<module>/` | `tests/e2e/pim/add-employee.spec.ts`                                                             |
| Classes                 | PascalCase with a type ending                    | `LoginPage`, `SidebarComponent`                                                                  |
| Locators                | nouns                                            | `usernameInput`, `loginButton`, `errorMessage`                                                   |
| Actions                 | verbs                                            | `login()`, `addEmployee()`, `searchByName()`                                                     |
| Variables and functions | camelCase                                        | `createEmployee`                                                                                 |
| Constants               | UPPER case object                                | `ROUTES`, `MESSAGES`                                                                             |
| Enums                   | PascalCase, PascalCase members                   | `Role.Admin`, `Menu.Pim`                                                                         |
| Test title              | `<ID> <what happens> @tag`                       | `PIM-03 search employee by name @smoke`                                                          |
| Branch                  | `feature/<module>-<id>-<short-name>`             | `feature/pim-03-search-employee`                                                                 |
| Commit                  | `type(scope): message`                           | `test(pim): add employee search scenario`                                                        |

## How to automate a scenario (start here)

1. Read the issue. Do the steps by hand once in the browser.
2. Look in `src/pages` and `src/components`. Reuse what exists.
3. Find locators with the recorder:
   `npx playwright codegen https://opensource-demo.orangehrmlive.com`
4. New screen? Create `<name>.page.ts` (locators first, then actions) and add it to `src/fixtures/base.fixture.ts`.
5. Need data? Add a factory in `src/data/factories`.
6. Write the test in `tests/e2e/<module>/`. Put the scenario ID and the tag in the title.
7. Run only your test:
   `npx playwright test --grep PIM-03 --headed`
8. Run `npm run lint` and `npm run typecheck`.
9. Commit, push, and open a pull request.
