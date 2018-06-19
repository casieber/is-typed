# is-typed

Check for the existence of TypeScript typings definitions for a given npm package.

The tool which check both for typings bundled with a package and for `@types` typings.

## Installation

```bash
npm install -g is-typed
```

## Usage

Using the tool is as simple as providing a list of packages to the cli.
```bash
is-typed <package>...
```

For instance:

```bash
# Check if typings exist for React
is-typed react

# Check if typings exist for redux and mobx
is-typed redux mobx
```