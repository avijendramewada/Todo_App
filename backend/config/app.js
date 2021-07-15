const convict = require('convict')

const config = convict({
  app: {
    name: {
      doc: 'Lead client',
      format: String,
      default: 'Lead client'
    }
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 12345,
    env: 'PORT'
  },
  namespace: {
    doc: '',
    format: String,
    default: 'v1',
    env: 'NAMESPACE'
  },
  logs: {
    directory: {
      doc: 'Directory where logs found',
      format: String,
      default: 'logs',
      env: 'LOG_DIRECTORY'
    },
    level: {
      doc: 'level of log',
      format: String,
      default: 'debug',
      env: 'LOG_LEVEL'
    }
  }
})

config.validate({ allowed: 'strict' })

module.exports = config
