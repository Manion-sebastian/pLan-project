
// in ./config/config.js
const fs = require('fs')
require('dotenv').config()

module.exports = {
  development: {
    "development": {
        "database": "plan-database",
        "logging": false,
        "host": "127.0.0.1",
        "dialect": "postgres"
      }
  },
  production: {
    use_env_variable: 'DATABASE_URI'
  }
}