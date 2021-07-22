const path = require('path')

const rootPath = process.cwd()

module.exports = (relativePath = '') => path.resolve(rootPath, relativePath)
