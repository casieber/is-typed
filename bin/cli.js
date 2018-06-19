#!/usr/bin/env node
const { hasTypes, result } = require('../src/index');

const [,, ...args] = process.argv;

checkPackages(args);

async function checkPackages(packages) {
	if (packages.length === 0) {
		console.log('Please provide at least one package name.');
		return;
	}

	for (const package of packages) {
		await checkPackage(package);
	}
}

async function checkPackage(package) {
	console.log(`Checking package "${package}"...`);

	const value = await hasTypes(package);

	switch(value) {
		case result.notFound:
			console.log(`No typings found. :(`);
			break;
		case result.foundBundled:
			console.log(`Yes! TypeScript typings are bundled with the package.`);
			break;
		case result.foundSeparate:
			console.log(`Yes! TypeScript typings can be found in the "@types/${package}" package.`);
			break;
		default:
			throw new Error(`Unknown result: ${value}`);
	}

	console.log('');
}

