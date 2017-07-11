# sancronos-validator

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Build Status][build-image]][build-url]
  [![bitHound Overall Score][score-image]][score-url]
  [![bitHound Dependencies][dep-image]][dep-url]
  [![bitHound Dev Dependencies][devdep-image]][devdep-url]
  [![bitHound Code][code-image]][code-url]
  [![Codacy Badge][codacy-image]][codacy-url]
  [![Code Climate](https://codeclimate.com/github/sanjorgek/sancronos-validator/badges/gpa.svg)](https://codeclimate.com/github/sanjorgek/sancronos-validator)
  [![Issue Count](https://codeclimate.com/github/sanjorgek/sancronos-validator/badges/issue_count.svg)](https://codeclimate.com/github/sanjorgek/sancronos-validator)

## About

Cron expression validator

  [![NPM][graph-image]][graph-url]

## Settings
Install sanpassport

```bash
$ npm install sancronos-validator
```

## Use

```javascript
const sancronos = require("sancronos-validator");
//..
sancronos.isValid("* * * * *")
.then(function(crontab) {
  //.. do something
})
.catch(function(err) {
  // handle error
});
```

See `test/` for more details.

## Changelog

### [1.0.0](https://github.com/sanjorgek/sancronos-validator) (11-07-2017)

Start

[npm-image]: https://img.shields.io/npm/v/sancronos-validator.svg
[npm-url]: https://npmjs.org/package/sancronos-validator
[downloads-image]: https://img.shields.io/npm/dm/sancronos-validator.svg
[downloads-url]: https://npmjs.org/package/sancronos-validator
[build-image]: https://travis-ci.org/sanjorgek/sancronos-validator.svg
[build-url]: https://travis-ci.org/sanjorgek/sancronos-validator
[code-image]: https://www.bithound.io/github/sanjorgek/sancronos-validator/badges/code.svg
[code-url]: https://www.bithound.io/github/sanjorgek/sancronos-validator
[dep-image]: https://www.bithound.io/github/sanjorgek/sancronos-validator/badges/dependencies.svg
[dep-url]: https://www.bithound.io/github/sanjorgek/sancronos-validator/bithound/dependencies/npm
[devdep-image]: https://www.bithound.io/github/sanjorgek/sancronos-validator/badges/devDependencies.svg
[devdep-url]: https://www.bithound.io/github/sanjorgek/sancronos-validator/bithound/dependencies/npm
[score-image]: https://www.bithound.io/github/sanjorgek/sancronos-validator/badges/score.svg
[score-url]: https://www.bithound.io/github/sanjorgek/sancronos-validator
[issue-image]: https://codeclimate.com/github/sanjorgek/sancronos-validator/badges/issue_count.svg
[issue-url]: https://codeclimate.com/github/sanjorgek/sancronos-validator
[climate-image]: https://codeclimate.com/github/sanjorgek/sancronos-validator/badges/gpa.svg
[climate-url]: https://codeclimate.com/github/sanjorgek/sancronos-validator
[graph-image]: https://nodei.co/npm-dl/sancronos-validator.png?months=6&height=1
[graph-url]: https://nodei.co/npm/sancronos-validator/
[codacy-url]: https://www.codacy.com/app/sanjorgek/sancronos-validator?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=sanjorgek/sancronos-validator&amp;utm_campaign=Badge_Grade
[codacy-image]: https://api.codacy.com/project/badge/Grade/5a4906c4dbd84637918c304c97b81d25

