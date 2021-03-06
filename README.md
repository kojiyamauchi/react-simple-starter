<h1 align="center">
🥤<br>
React Simple Starter.
</h1>

<p align="center"><a href="https://kojiyamauchi.github.io/react-simple-starter/">https://kojiyamauchi.github.io/react-simple-starter</a></p>
<p align="center"><a href="https://kojiyamauchi.github.io/react-simple-starter/storybook/">https://kojiyamauchi.github.io/react-simple-starter/storybook</a></p>

## 🧉 Usage.

- Initialize package.json
  - -> `yarn init`
- Install All Modules.
  - -> `yarn` or `yarn install`
- Setup. ( `rm -rf .git` )
  - -> `yarn setup`
- Development.
  - -> `yarn dev`
- Build.
  - -> `yarn build`
- Clean `delivery` Dir.
  - -> `yarn clean`
- Setting for GitHub. ( When Use CI & Auto Build & Auto Deployment )
  - Use Repositories...
    - `Settings` -> `Branches` -> `Branch protection rules`
      - -> `Branch name pattern`
        - Add `develop`
      - -> `Protect matching branches`
        - Check `Require status checks to pass before merging`
        - Check `Require branches to be up to date before merging`
        - Check `ESLint & stylelint & Jest`
        - Check `Build Test`

ー

## 🧉 Continuous Integration.

- When Commit & Push to the Pull Request, ( Only Pull Request to `develop` Branch )
  - When There is a File Containing Test Code in `resource/tests` Directory, Jest Will Launch.
  - Statically Analyze Code with ESLint && stylelint. ( Before That, Husky & Lint Staged also Uses ESLint && stylelint 💣 )
  - Test the Build at Every Commit.

Launches Jest & ESLint & Test Build in `.github/workflows/ci.yml`

ー

## 🧉 Build & Deployment. ( Auto Build & Auto Deployment on GitHub )

- Use GitHub Actions. ( Deployment for GitHub Pages or Netlify or FTP )
  - When Pull Requests to the `develop` Branch are Closed & Merged,  
    It Will Auto Build in `delivery` Directory of the Corresponding Branch.
  - Contents of `delivery` Directory are Deployed to `master` Branch.
  - Use GitHub Pages. -> Displayed on GitHub Pages.
  - Use Netlify. -> Deploys via Netlify.
  - Use FTP. -> Deploys via FTP.

Choose Which Type of Deployment in `.github/workflows/delivery.yml`

ー

## 🧉 Update Modules.

- Check to Latest Version of Modules on package.json ( ncu )
  - -> `yarn check-pkg`
- Update to Latest Version of Modules on package.json ( ncu -u )
  - -> `yarn update-pkg`
- Re:Install All Modules. ( rm yarn.lock && rm -rf node_modules && yarn install )
  - -> `yarn re-install`

This Update Method's for Development by Personal Work 🤔  
To See Which Modules Can to Be Updated Which Version.  
Don't Use `yarn install --no-lockfile` and `yarn install --pure-lockfile`  
Because Want to Use Cache on GitHub Actions.  
When Development with Multiple People, Use `yarn upgrade`  
(Don't Remove `yarn.lock`, for Eliminate Difference in Version of Each Modules.)

ー

## 🖋 Memo.

- When Deploy on Subdirectory, Setting the Below.
  - base.config.ts -> `baseSeo.location` && `pathPrefix()`
  - package.json -> `config.path.prefix`

ー

## ✋ TODO.

- To Fast Up the Build, `ts-loader` has `happyPackMode` Enabled. (`transpileOnly: true` is Applied)  
  So,
  > will not add type-only files (files that contains only interfaces and/or types) to the webpack dependencies set. Webpack watches only files that are in the dependencies set. This means that changes in type-only files will not trigger new compilation.  
  > -> <https://www.npmjs.com/package/fork-ts-checker-webpack-plugin#type-only-modules-watching>
- Styled Component's `GlobalStyle` is Not Minified at Build Time.  
  It Seems JS's Tagged Template Literals are Difficult to Minify Due to Their Specification.
  - <https://github.com/terser/terser/issues/129>
  - <http://var.blog.jp/archives/79716639.html>
- @types/styled-components When Install Latest Version, @types/react-native's Installed Together.  
  Temporary -> Add `.yarnclean` Ignoring `@types/react-native`
  - <https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33311>
- styled-components && stylelint && stylelint-config-recess-order.
  - Using placeholder, Sometimes the auto-fix doesn't work. 😵

<h2 align="center">☕️</h2>
