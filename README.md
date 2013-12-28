bdd-wrappers
=============

BDD wrappers for jasmine and mocha describe/it to help writing tests in GIVEN WHEN THEN AND IT fashion so you can write:

```js
GIVEN("a gremlin", function () {
	WHEN("I feed it", function () {
		beforeEach(function () {
			gremlin.feed();
		});

		THEN("is happy", function () {
			expect(gremlin.happy).to.be.true;
		});

		AND("I give it water", function () {
			beforeEach(function () {
				gremlin.water();
			});

			THEN("they are all happy", function () {
				expect(gremlin[0].happy).to.be.true;
				expect(gremlin[1].happy).to.be.true;
				expect(gremlin[2].happy).to.be.true;
				expect(gremlin[3].happy).to.be.true;
			});
		});

		WHEN("it's past midnight", function () {
			beforeEach(function () {
				time.set('0000');
				gremlin.feed();
			});

			THEN("it's not cute anymore", function () {
				expect(gremlin.cute).to.be.false;
			});
		});
	});
});
```

Instead of:

```js
describe("GIVEN a gremlin", function () {
	describe("WHEN I feed it", function () {
		beforeEach(function () {
			gremlin.feed();
		});

		it("THEN is happy", function () {
			expect(gremlin.happy).to.be.true;
		});

		describe("AND I give it water", function () {
			beforeEach(function () {
				gremlin.water();
			});

			it("THEN they are all happy", function () {
				expect(gremlin[0].happy).to.be.true;
				expect(gremlin[1].happy).to.be.true;
				expect(gremlin[2].happy).to.be.true;
				expect(gremlin[3].happy).to.be.true;
			});
		});

		describe("WHEN it's past midnight", function () {
			beforeEach(function () {
				time.set('0000');
				gremlin.feed();
			});

			it("THEN it's not cute anymore", function () {
				expect(gremlin.cute).to.be.false;
			});
		});
	});
});
```

When a test fails, the trace will correctly output GIVEN a gremlin WHEN I feed it THEN is happy.

Installation
============

```bash
npm install bdd-wrappers
```

How to use
==========

This will add the GIVEN, WHEN, AND, THEN functions to the global object

```js
require("bdd-wrappers");

GIVEN(...);
```

You can also define your own wrappers. The first parameter is a string and will prefix the string describing the test.

```js
var wrap = require("bdd-wrappers").wrap;

// A wrapper for it(...);
GLOBAL.SHOULD = wrap("SHOULD ", it);

// So:
SHOULD("do something", func);
// will ouput: SHOULD so something

// A wrapper for describe(...);
GLOBAL.OR = wrap("OR ", describe);
```

LICENSE
=======

MIT
