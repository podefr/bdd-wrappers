/**
 * bdd-wrappers.js - http://podefr.github.com/bdd-wrappers/
 * Copyright(c) 2013 Olivier Scherrer <pode.fr@gmail.com>
 * MIT Licensed
 */
function wrap(name, step) {
	return function func(desc, cb) {
		step(name + desc, cb);
	};
}

GLOBAL.GIVEN = wrap("GIVEN ", describe);
GLOBAL.WHEN = wrap("WHEN ", describe);
GLOBAL.AND = wrap("AND ", describe);
GLOBAL.THEN = wrap("IT ", it);

module.exports.wrap = wrap;