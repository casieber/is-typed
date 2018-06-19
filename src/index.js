require('es6-promise').polyfill();
require('isomorphic-fetch');

const registry = 'https://registry.npmjs.org';

const result = {
	notFound: 'not-found',
	foundBundled: 'found-bundled', // Bundled with package
	foundSeparate: 'found-separate', // Found in @types
};


async function hasTypes(package) {
	// Check the package itself for bundled types
	let response = await fetch(`${registry}/${package}/latest`);

	if (response.ok) {
		const info = await response.json();

		if (info.types || info.typings) {
			return result.foundBundled;
		}
	}

	// Check for @types definitions
	response = await fetch(`${registry}/@types%2F${package}`);

	return response.ok ? result.foundSeparate : result.notFound;
}

module.exports = {
	result,
	hasTypes,
};