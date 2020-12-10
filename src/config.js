const env = process.env.EMP_ENV || 'dev'
const dev = {
  host: 'localhost',
  port: 8116,
  publicPath: 'http://localhost:8116/',
}
const prod = {
  host: 'localhost',
  port: 8116,
  publicPath: 'http://localhost:8116/',
}
const configs = {dev, prod}
exports.getConfig = env => {
  return configs[env] || {}
}

exports.config = configs[env]
