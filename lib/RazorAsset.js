'use strict'

const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset')

class RazorAsset extends HTMLAsset {
  constructor(name, pkg, options) {
    super(name, pkg, options)
    // output is <name>.cshtml
    this.type = 'cshtml'
  }
}

module.exports = RazorAsset
