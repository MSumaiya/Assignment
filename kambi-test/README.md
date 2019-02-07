## Task - Clean

The goal of this task is to refactor a piece of code. You should change it so it become in a way that you would like to find it when you are working in a software project. The only rule is that the
provided index.html page should write the calculated price to the console for the given parameters.

### Price calculator

This application calculates price based on different rules and values. The calculation uses:

* User type
  * there are two different user types:
    * Company user
    * Normal user
* Product Type
  * there are two product types:
    * New
    * Old
* Price
* Published date

#### Formula

The formula for the price calculation is:

``Product price + product type price – rebate``

#### Additional prices

The additional product type prices are:

* New: +25 SEK
* Old: +35 SEK

#### Rebate rules

* If the product is _new_ and _published today_ you will recieve a rebate of 10 SEK.
* If you are a _company user_ you will recieve a rebate of 5 SEK.

#### Structure

* index.html - The start page of the application
* src/price-calculator.js - The script for price calculations
* spec/price-calculator.specs.js - The unit tests for the application
* spec/runner.html - The unit test runner. (In this task we're using [mocha.js](https://github.com/visionmedia/mocha) with [expect.js](https://github.com/LearnBoost/expect.js))

### Validation

You do NOT have to spend any time on input parameter validation.

### Browser support

You only have to support the latest stable version of Chrome.

### What we expect

We expect you to change the parts of the code you think is bad to something better. Since we do not provide a real context, it's up to you to guess some parts, and to define limitations.

You are free to do anything you want to the code, including restructuring it, adding frameworks e.t.c.

You should not spend more than one to two hours on this task. We understand that there might be things you want to do but didn't have time to do within that time. This is perfectly fine.

When going through the results, we will look at the following criteria:

* Readability
* Testability
* Changeability