# has-types

Check for the existence of TypeScript typings definitions for a given npm package.

The tool which check both for typings bundled with a package and for `@types` typings.

## Installation

```bash
npm install -g has-types
```

## Usage

Using the tool is as simple as providing a list of packages to the cli.
```bash
has-types <package>...
```

For instance:

```bash
# Check if typings exist for React
has-types react

# Check if typings exist for redux and mobx
has-types redux mobx
```