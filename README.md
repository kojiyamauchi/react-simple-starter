<h1 align="center">
🥤<br>
React Simple Starter.
</h1>  

<p align="center"><a href="https://kojiyamauchi.github.io/react-simple-starter/">https://kojiyamauchi.github.io/react-simple-starter</a></p>  

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
        - Check `Build Test`
        - Check `Jest & ESLint`

ー  

## 🧉 Continuous Integration.
- When Commit & Push to the Pull Request, ( Only Pull Request to `develop` Branch )
  - When There is a File Containing Test Code in  `resource/tests` Directory, Jest Will Launch.
  - Statically Analyze Code with ESLint. ( Before That, Husky & Lint Staged also Uses ESLint 💣 )
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
- Next Hot Module Replacement Modules.  
  - -> [React Refresh webpack Plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin)

ー  

## ✋ TODO.  
- When Setup Browsers List, (In package.json or Add `.browserslistrc`) HMR's Does Not Work. 💣
- To Fast Up the Build, `ts-loader` has `happyPackMode` Enabled. (`transpileOnly: true` is Applied)  
So,  
> will not add type-only files (files that contains only interfaces and/or types) to the webpack dependencies set. Webpack watches only files that are in the dependencies set. This means that changes in type-only files will not trigger new compilation.  
-> <https://www.npmjs.com/package/fork-ts-checker-webpack-plugin#type-only-modules-watching>
- Styled Components V5's `createGlobalStyle` Does Not Work, When `@import`'s (CSS Import, Google Web Fonts etc.) Written Inside. For That, Use V4's Latest.
  - <https://github.com/styled-components/styled-components/releases/tag/v5.0.0>  
  - When Use `>=5.0.0`, Use `React Helmet` & import with `<link href=“~"/>`
- @types/styled-components When Install Latest Version, @types/react-native's Installed Together.  
  Temporary -> Add `.yarnclean` Ignoring `@types/react-native`
  - <https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33311>  
- Styled Components Autofix Stylelint Doesn't Work Yet.  
  Maybe Auto Fix of Stylelint Doesn't Work in Template Literals.  
  So, Display Only Warning on the Terminal.
  - <https://github.com/styled-components/stylelint-processor-styled-components/issues/264>  
  - <https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#9100>

<h2 align="center">☕️</h2>    
