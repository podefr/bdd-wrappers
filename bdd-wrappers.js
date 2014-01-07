/**
 * bdd-wrappers.js - https://github.com/podefr/bdd-wrappers
 * Copyright(c) 2013 Olivier Scherrer <pode.fr@gmail.com>
 * MIT Licensed
 */
'use strict';

var _global = Function('return this')();

function wrap(name, step) {
	return function func(desc, cb) {
		step(name + desc, cb);
	};
}

_global.GIVEN = wrap("GIVEN ", describe);
_global.WHEN = wrap("WHEN ", describe);
_global.AND = wrap("AND ", describe);
_global.THEN = wrap("IT ", it);

module.exports.wrap = wrap;