const fs = require('fs')
const path = require('path')

function loadUserConfig() {
  const flavors = [
    path.resolve(process.cwd(), 'razor.config.js'), // razor.config.js
    path.resolve(process.cwd(), '.razor.json') // .razor.json
  ]

  if (fs.existsSync(flavors[0])) {
    return require(flavors[0])
  }

  if (fs.existsSync(flavors[1])) {
    return JSON.parse(fs.readFileSync(flavors[1], { encoding: 'utf-8' }))
  }

  return {
    type: 'html'
  }
}

module.exports = {
  loadUserConfig
}
