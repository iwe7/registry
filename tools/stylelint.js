#!/usr/bin/env node
// To just run the linter: ./tools/stylelint.js
// To auto-format code:    ./tools/stylelint.js --fix
const run = require("./run");
const extra = process.argv.slice(2).join(" ");
// TODO use *.scss here.
run.sh(`node ./node_modules/stylelint/bin/stylelint.js
  ${extra}
  --config stylelint.json
  src/main.scss
  src/normalize.scss
  src/syntax.scss
  src/syntax_dark.scss
  src/syntax_light.scss
`);
