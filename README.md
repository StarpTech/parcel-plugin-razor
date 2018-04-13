# parcel-plugin-razor
Parcel plugin to handle Razor templates `.cshtml` as entry-points.

## Install

> Using plugins in Parcel could not be any simpler. All you need to do is install them and save in your package.json. Plugins should be named with the prefix parcel-plugin-, e.g. parcel-plugin-foo. Any dependencies listed in package.json with this prefix will be automatically loaded during initialization.

Install with [npm](https://www.npmjs.com/):

```bash
$ npm install --save parcel-plugin-razor
```

Install with [yarn](https://yarnpkg.com):

```bash
$ yarn add parcel-plugin-razor
```

## Configuration

If you would like to enforce your own asset extension simply create `.razor.json` or  `razor.config.js` in your project root.

```js
{
    "type": "html" // the output extension of your entry file (default: html)
}
```