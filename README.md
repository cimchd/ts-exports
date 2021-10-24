# Test for typescript and export field from package.json for volar

## Prerequisites

- Yarn - This package uses yarn workspaces

## Getting started

```bash
git clone https://github.com/cimchd/ts-exports.git
cd ts-exports
yarn install
yarn build
yarn dev
```

## Test package

This project provides the private npm package `@project/test`, defined under `/packages/test`, configured as a yarn workspace package.

### Using exports field

```json
{
  "exports": {
    "./components": "./dist/components/index.js",
    "./dist/*": "./dist/*",
    "./*": "./dist/*"
  }
}
```

There are three entries that I use frequently in my projects. The idea is to import vue components from a package by using the syntax:

```js
import { MyComponent } from "[packageName]/components";
```

The second entry is for compatibility reasons to allow access to all files. The last entry is to allow skipping the dist folder in imports.

## Browser output

To see that all three imports in `App.vue` are working, this should be the browser output:

![](docs/screen_browser.png)

And this is the error message in vscode:

![](docs/screen_vscode.png)

Interesting, that it seems like the first two imports are detected correctly. This seems to be an error, because volar still does not show an error if the two export entries for the dist folder are removed.
