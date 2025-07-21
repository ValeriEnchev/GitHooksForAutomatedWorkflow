# Git Hooks For Automated Workflow

## Scenario

· You are part of a development team working on a project.

· You need to:

	o Clone a repo and create a feature branch.

	o Implement a new feature and commit changes.

	o Use pre-commit and pre-push hooks to enforce standards.

	o Push changes to GitHub, triggering GitHub Actions.

	o Rebase your branch onto main, resolving any conflicts.

	o Merge the branch and clean up the old feature branches.

	o Optimize repo size using Git LFS if needed.
	
## Installing steps

npm init

npm install jest

npm install eslint

npx eslint --init

git remote add origin git@github...

git remote -v

git push -u origin main 

git checkout -b installing-feature

git push -u origin installing-feature 