#!/usr/bin/env node
const { hasTypes, result } = require('../src/index');

const [,, ...args] = process.argv;

const package = args[0];

console.log(`Checking ${package}...`);

hasTypes(package).then(value => {
	switch(value) {
		case result.notFound:
			console.log(`No typings found. :(`);
			break;
		case result.foundBundled:
			console.log(`Yes! TypeScript typings are bundled with the package.`);
			break;
		case result.foundSeparate:
			console.log(`Yes! Typings can be found in the @types/${package} package.`);
			break;
		default:
			throw new Error(`Unknown result: ${value}`);
	}
});