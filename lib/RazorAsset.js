'use strict'

const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset')
const { loadUserConfig } = require('./utils')
const userConfig = loadUserConfig()

class RazorAsset extends HTMLAsset {
  constructor(name, pkg, options) {
    super(name, pkg, options)
    this.type = userConfig.type
  }
}

module.exports = RazorAsset
