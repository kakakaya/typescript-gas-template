<!-- coding:utf-8, mode:gfm-mode -->
<!-- Author: kakakaya, Date: Thu Feb  9 01:04:58 2017 -->
# typescript-gas-template
TypeScript + Google Apps ScriptでWebページを作るときのためのテンプレート

# Install
1. Initialize with your GAS project, with `gapps` command.
`gapps init <your-project-id>`

2. Compile TypeScript source. (result will be output to `src` directory.)
`tsc gas`

3. Copy static files from `html` to `src`.
`cp html/*.html src/`

4. Push files in `src` to google drive.
`gapps push`

# Usage
* script files: write `gas/*.ts`
* static files(html, css, js for evaluate in HTML): `html/*.html`
* build and deploy directory: `src`; *Never edit files under directory*.

# TODO
- [ ] Add gulpfile.babel.js
