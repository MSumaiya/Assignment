# Day of npm
Today you will setup a new project from scratch with `npm` and `git`.
At the end of the day you will have a working caculator with a CLI (command line interface), implementation.
If you have time, you will also implement a REST interface.

## Setup project
- Create a new branch for your project with `git checkout -b my-branch-name`.
- Run `npm init` to initialize `npm` with a `package.json` file.
- Install our test framework `mocha` as a `devDependency`. Edit `package.json` so that mocha run all unit tests with the command `npm run test`.
- Install and configure `eslint` as a `devDependency`. Run `eslint --init` to get a basic configuration. Indent with 2 spaces. Set `SwitchCase` to `1`. Enable the `mocha plugin`. Make sure you can use `console.log()` without any linting errors. Create a `lint` script that executes eslint like so `eslint *.js **/*.js || exit 0`.
- Edit `package.json` so that eslint runs before the test suite. You do that by creating a script called `pretest` and configure it to run `npm run lint`.
- Edit `package.json` so that mocha run all unit tests whenever a javascript file changes. You may use either the mocha flag `--watch`, or you may use a tool like `onchange`. The latter is probably the best solution as it allows you to run the linter before each test suite.
- If you are using onchange, configure a `watch` script so that it runs the `test` script whenever a javascript file is saved. `onchange '**/*.js' -- npm run test`. Configure a `prewatch` script so that it runs the initial test suite without file changes, like so `npm run test`. 

## The simple calculator
- Create a calculator module with an eval function that takes a mathematical expression like so `calculator.eval("4+5")`. (This expression should return 9) The calculator should handle _addition_, _subtraction_, _muliplication_ and _division_ of integers. It only has to handle simple expressions like `a+b`. It's ok to reject expressions like `a+b-c` or `a+(b+c)`. Use _TDD_ to develop the code!

Here are some examples of tests you may want to create:
- should calculate add expression
- should calculate subtract expression
- should calculate multiply expression
- should calculate division expression
- should throw exception when operation is undefined (like division by zero)
- should throw exception when expression is not recognized (like not a mathematical expression)
- should handle spaces in expression (like any of the followng expressions are ok: "a+b", "a + b", "a&nbsp;&nbsp;&nbsp;  + b")


## Build a CLI to the calculator
- Modify the file `cli.js` to use the calculator from command line. This code is difficult to test - it's not worth the effort. However, the implementation is fairly minimal, so make sure it works by testing it manually.

## Build a REST API to the calculator
- Create an api module to use with `server.js`so that you can interact with the calculator over http. 
- The api should _only_ accept `GET` requests. The expression is passed to the backend as a query parameter. (Not that you have to URL-encode the expression!). An example request with using _curl_ may look like `curl -i -XGET "http://localhost:8080/calculator?q=4%2B5"`, with the following response: 
```
HTTP/1.1 200 OK
Date: Tue, 29 May 2018 13:30:17 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"result":9}
```

- Invalid expressions should return the http code 400 "Bad Request" and an error message. Example: `curl -i http://localhost:8080/calculator?q=foo` returns 
```
HTTP/1.1 400 Bad Request
Date: Tue, 29 May 2018 13:32:30 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"error":"Expression is not recognized."}
``` 
and `curl -i http://localhost:8080/calculator` returns 
```
HTTP/1.1 400 Bad Request
Date: Tue, 29 May 2018 13:32:52 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"error":"Could not parse query string."}
```

- Any unexpected error should return http code 500 "Internal Error".
- Create an e2e test that verifies a successful request.

Here are some examples of tests you may want to create:
- should reject POST request with status 405
- should reject all verbs but GET and HEAD
- should return allowed header when verb is rejected
- should return 500 on unknown internal error
- should return 400 bad requrest when the error is defined as illegal argument
- should respond to bad requests with error message
- should respond with bad request when query parameters are missing
- should respond to valid requests with 200
- should respond with result in body
- should not include body in a HEAD request
- should respond with status code 200 on a HEAD request
- should parse expression

## Enhance the calculator
- The calculator should echo numbers without mathematical operatiors. Example: `curl -i http://localhost:8080/calculator?q=42` returns 
```
HTTP/1.1 200 OK
Date: Tue, 29 May 2018 13:32:30 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"result":42}
``` 
- The calculator should accept floating numbers, e.g. expressions like "4.3-12.8".
- The calculator should accept signed numbers. Example: `curl -i -XGET "http://localhost:8080/calculator?q=-6%2B5"` returns 
```
HTTP/1.1 200 OK
Date: Tue, 29 May 2018 13:30:17 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"result":-1}
```


Here are some examples of tests you may want to create:
- should handle floting numbers
- should echo numbers (an expression like "4.32" should return "4.32")
- should not accept orphans (x.y.z is considered an orphan)
