<h1 align="center">
🥤<br>
React Simple Starter.
</h1>

<p align="center"><a href="https://kojiyamauchi.github.io/react-simple-starter/">https://kojiyamauchi.github.io/react-simple-starter</a></p>
<p align="center"><a href="https://kojiyamauchi.github.io/react-simple-starter/storybook/">https://kojiyamauchi.github.io/react-simple-starter/storybook</a></p>

## 🧉 Usage.

- Initialize package.json
  - -> `yarn init`
- Setup. ( `rm -rf .git` )
  - -> `yarn setup` && `git init`
- Install All Modules.
  - -> `yarn` or `yarn install`
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
        - Check `CSpell`
        - Check `ESLint`
        - Check `Stylelint`
        - Check `Type Check`
        - Check `Jest`
        - Check `Build Test`

ー

## 🖋 Memo.

- To Fast Up the Build, `ts-loader` has `happyPackMode` Enabled. (`transpileOnly: true` is Applied)  
  So,
  > will not add type-only files (files that contains only interfaces and/or types) to the webpack dependencies set. Webpack watches only files that are in the dependencies set. This means that changes in type-only files will not trigger new compilation.  
  > -> <https://www.npmjs.com/package/fork-ts-checker-webpack-plugin#type-only-modules-watching>

ー

## ✋ TODO.

- styled-components && stylelint, auto fix doesn't work.
  - https://github.com/styled-components/styled-components/issues/3607
  - https://github.com/stylelint/stylelint/issues/3252
  - https://github.com/stylelint/postcss-css-in-js/issues/225
- storybook. (v7 + React18)
  - https://github.com/storybookjs/storybook/issues/17831
  - https://github.com/storybookjs/storybook/blob/next/MIGRATION.md

<h2 align="center">☕️</h2>
