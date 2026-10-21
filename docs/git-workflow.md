# Git workflow for students

Follow these steps for every scenario. Do not skip any step.

## One-time setup

1. Create a folder called `Projects` in your home folder. You will clone inside it. Do not use Desktop or Documents, because they may be synced by iCloud or OneDrive.
2. Open the main repository on GitHub and click **Fork** (top right). A fork is your own copy of the project under your GitHub account.
3. Clone your fork to your computer:
   `git clone https://github.com/<your-username>/orangehrm-playwright-framework.git`
4. Go inside the folder: `cd orangehrm-playwright-framework`
5. Connect the original repository. We call it `upstream`:
   `git remote add upstream https://github.com/<owner>/orangehrm-playwright-framework.git`
6. Check it worked: `git remote -v`. You should see `origin` (your fork) and `upstream` (the original).

## For every new scenario

1. Pick an issue and comment "I will take this".
2. Get the latest code:
   `git checkout main`
   `git pull upstream main`
   `git push origin main`
3. Create your branch:
   `git checkout -b feature/pim-03-search-employee`
4. Write your test and run it on your computer.
5. See what changed: `git status`
6. Add your files: `git add <file names>`
7. Commit: `git commit -m "test(pim): add employee search scenario"`
8. Push your branch: `git push origin feature/pim-03-search-employee`
9. On your fork page on GitHub, click **Compare & pull request**. Check that the base repository is the original one and the base branch is `main`.
10. Fill in the template. Write `Closes #<issue number>`.
11. Wait for the automatic checks. If one fails, read the error, fix it, commit again and push. The pull request updates by itself.
12. The owner may leave review comments. Fix them and push again.
13. After the merge, update your `main` again (step 2) before you start the next scenario.

## Common problems

- **"Updates were rejected"**: your branch is behind. Run `git pull` and push again.
- **Merge conflict**: two people changed the same lines. Open the file, keep the right lines, remove the `<<<<`, `====` and `>>>>` marks, then run `git add` and `git commit`.
- **Committed the wrong file**: ask for help before you push.

## Screenshots

