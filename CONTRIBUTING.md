# Contributing to this project

*This information is heavily based on [this CONTRIBUTING.md document](https://github.com/necolas/normalize.css/edit/master/CONTRIBUTING.md).*

Before making a contribution, please take a moment to review this document. It will make the process easier and more enjoyable for everyone involved.

Following the guidelines in this document shows that you respect the time of the maintainers of this open-source project. In return, maintainers should show their respect for you by addressing your requests, issues, and contributions in a timely fashion.

## Submitting issues

GitHub’s built-in issue tracker is the preferred channel for bug reports, feature requests, and submitting pull requests.

**Do not** use the issue tracker for personal support questions. They will probably not be addressed.
**Do not** derail or troll issues. Please try to keep things on topic and be respectful to others.

## Bug reports

*Demo or it didn’t happen.*

A bug is a problem that you can demonstrate to a maintainer on this open-source project. Good bug reports are very helpful, and encouraged!

If you are thinking about reporting a bug, please do the following:

1. **Search for existing issues** - it could have already been reported.
2. **Check for fixes** - try to reproduce the bug using the latest release on the `master` branch in the repository.
3. **If the bug persists**, submit an issue and create a live example of the bug using a public service like [jsFiddle](http://jsfiddle.net) or [Codepen](http://codepen.io). Link to your example in the issue that you submit.

Please be as detailed as possible. Ask yourself: What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? What would you expect to be the outcome?

## Feature requests

Feel free to request whatever you like, but please take a moment to think about whether your request is within the scope of the project. You should make a strong case for your request, otherwise the maintaining developers will probably not consider it. Provide as much detail as you can.

## Pull requests

Good pull requests are awesome. Bad pull requests are a headache. They should always be limited by the scope of the request, and avoid including unrelated commits.

**Please file an issue first** before deciding to do a lot of work. Otherwise, you run the risk of wasting time working on something that might not get merged into the project.

Follow this process if you’d like your work to be considered for inclusion in the project:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/html5-test-page
   # Navigate to the newly cloned directory
   cd html5-test-page
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/cbracco/html5-test-page
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. **Never work directly on `master`**. Create a new topic branch (off the latest version of `master`) to contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Please adhere to these [git commit
   message conventions](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely be merged into the main project. Use Git’s
   [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.

   Please add a test to the `test.html` file if appropriate, and test
   your change(s) in all supported browsers.

5. Locally rebase the upstream development branch into your topic branch:

   ```bash
   git pull --rebase upstream master
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

10. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description.

**IMPORTANT**: By submitting a patch, you agree to allow the project owner to
license your work under the same license as that used by the project.

## Maintainers

If you have commit access, please follow this process for merging patches and
cutting new releases.

### Accepting patches

1. Check that a patch is within the scope and philosophy of the project.
2. Check that a patch has any necessary tests and a proper, descriptive commit
   message.
3. Test the patch locally.
4. Do not use GitHub’s merge button. Apply the patch to `master` locally
   (either via `git am` or by checking the whole branch out). Amend minor
   problems with the author’s original commit if necessary. Then push to GitHub.

### Releasing a new version

1. Include all new functional changes in the CHANGELOG.
2. Use a dedicated commit to increment the version. The version needs to be added to the `README.md` and `CHANGELOG.md` (inc. date) files.
3. The commit message must be of `v0.0.0` format.
4. Create an annotated tag for the version: `git tag -m "v0.0.0" 0.0.0`.
5. Push the changes and tags to GitHub: `git push --tags origin master`
