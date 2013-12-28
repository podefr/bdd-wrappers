/**
 * bdd-wrappers.js - https://github.com/podefr/bdd-wrappers
 * Copyright(c) 2013 Olivier Scherrer <pode.fr@gmail.com>
 * MIT Licensed
 */
'use strict';

function wrap(name, step) {
	return function func(desc, cb) {
		step(name + desc, cb);
	};
}

this.GIVEN = wrap("GIVEN ", describe);
this.WHEN = wrap("WHEN ", describe);
this.AND = wrap("AND ", describe);
this.THEN = wrap("IT ", it);

module.exports.wrap = wrap;