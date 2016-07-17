[![Travis](https://img.shields.io/travis/mediamonks/seng-log.svg?maxAge=2592000)](https://travis-ci.org/mediamonks/seng-log)
[![Code Climate](https://img.shields.io/codeclimate/github/mediamonks/seng-log.svg?maxAge=2592000)](https://codeclimate.com/github/mediamonks/seng-log)
[![Coveralls](https://img.shields.io/coveralls/mediamonks/seng-log.svg?maxAge=2592000)](https://coveralls.io/github/mediamonks/seng-log?branch=master)
[![npm](https://img.shields.io/npm/v/seng-log.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-log)
[![npm](https://img.shields.io/npm/dm/seng-log.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-log)

# seng-log

Add a description here...


## Installation

### npm

```sh
npm i -S seng-log
```

### manual

You can clone this repository and build the distribution files for use in
the browser yourself, and grab one of the following files from the
`/dist/` folder:

```sh
git clone git@github.com:mediamonks/seng-log.git
cd seng-log
npm i
npm run build-dist
```

- **/dist/umd** (bundled with webpack)
- **/dist/amd** (bundled with webpack)
- **/dist/commonjs2** (bundled with webpack, but why don't you use npm?)
- **/dist/browser** (bundled with webpack, available as `window.SengLog`)
- **/dist/system**
- **/dist/es6**

## Usage

```ts
import SengLog from 'seng-log';
// import SengLog from 'seng-log/lib/classname';

// do something with SengLog
```


## Documentation

View the [generated documentation](https://rawgit.com/mediamonks/seng-log/master/doc/typedoc/index.html).


## Building

In order to build seng-log, ensure that you have [Git](http://git-scm.com/downloads)
and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:
```sh
git clone https://github.com/mediamonks/seng-log.git
```

Change to the seng-log directory:
```sh
cd seng-log
```

Install dev dependencies:
```sh
npm install
```

Use one of the following main scripts:
```sh
npm run build   		# build this project
npm run generate   		# generate all artifacts (compiles ts, webpack, docs and coverage)
npm run typings			# install .d.ts dependencies (done on install)
npm run test-unit    	# run the unit tests
npm run validate		# runs validation scripts, including test, lint and coverage check
npm run lint			# run tslint on this project
npm run doc				# generate typedoc and yuidoc documentation
npm run typescript-npm	# just compile the typescript output used in the npm module
```

When installing this module, it adds a pre-commit hook, that runs the `validate`
script before committing, so you can be sure that everything checks out.

## Contribute

View [CONTRIBUTING.md](./CONTRIBUTING.md)


## Changelog

View [CHANGELOG.md](./CHANGELOG.md)


## Authors

View [AUTHORS.md](./AUTHORS.md)


## LICENSE

[MIT](./LICENSE) © MediaMonks


