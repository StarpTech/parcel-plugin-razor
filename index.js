'use strict'

module.exports = bundler => {
  bundler.addAssetType('.cshtml', require.resolve('./lib/RazorAsset'))
}
