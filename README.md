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

Then there should be the following browser output, to see that all three imports in `App.vue` are working:

![](docs/screen_browser.png)

And this is the error message in vscode:

![](docs/screen_vscode.png)

Interesting, that it seems like the first to imports are detected correctly
