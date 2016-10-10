[![Travis](https://img.shields.io/travis/mediamonks/seng-log.svg?maxAge=2592000)](https://travis-ci.org/mediamonks/seng-log)
[![Code Climate](https://codeclimate.com/github/mediamonks/seng-log/badges/gpa.svg)](https://codeclimate.com/github/mediamonks/seng-log)
[![Coveralls](https://img.shields.io/coveralls/mediamonks/seng-log.svg?maxAge=2592000)](https://coveralls.io/github/mediamonks/seng-log?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/mediamonks/seng-log/badge.svg?branch=master)](https://coveralls.io/github/mediamonks/seng-log?branch=develop)
[![npm](https://img.shields.io/npm/v/seng-log.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-log)
[![npm](https://img.shields.io/npm/dm/seng-log.svg?maxAge=2592000)](https://www.npmjs.com/package/seng-log)

# seng-log

  Provides a namespaced debugging utility that exposes common Console functions (e.g. log, error, warn, etc). Every
  instance of Log should be given a namespace string (e.g. `MyApp.MyUtility.SomeComponent`). When a Console method is
  called, Log will first read the cookie `__debug__` and check if the namespace matches the cookie value. When the
  cookie matches the namespace, it will run the function.
 
  The cookie value should be a pipe (`|`) delimited string containing wildcards, e.g.
  `'MyApp.SomeUtil.*|MyApp.OtherUtil.Component.*'`
 
  Log also provides additional features atop the regular Console API. Log can log the date and time of the log, and
  the amount of milliseconds that have elapsed since the last log call. It will also log the namespace.
 
  **Log example with all features enabled:**
 
      [MyUtility.SomeComponent] [03-02-1970 12:00:00] [200ms] Hello world!
 
  Some static methods are available that allow you to update the cookie. To enable calling this class from the console,
  run the following (or add it to a bookmarklet):
 
      require(['lib/temple/util/Log'], function(Log) { window.Log = Log.default; });
 
  To improve your logging experience, enable
  [Framework Blackboxing](https://developer.chrome.com/devtools/docs/blackboxing) for this library. This will show the
  file and line number of the place the log method was called from, instead of linking to this library.


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
npm run build:dist
```

- **/dist/umd** (bundled with webpack)
- **/dist/amd** (bundled with webpack)
- **/dist/commonjs2** (bundled with webpack, but why don't you use npm?)
- **/dist/browser** (bundled with webpack, available as `window.SengLog`)
- **/dist/system**
- **/dist/es6**

## Client Tests

Make sure you include the script (bundled with webpack) in /example/index.html

```
npm run build:dev
```

You can test in: [http://localhost:8080](http://localhost:8080) 

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


