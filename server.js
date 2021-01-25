const fastify = require('fastify')

const { root } = require('./endpoints-functions.js')

const PORT = process.env.PORT || 3000
const ADDRESS = '0.0.0.0'

const fastifyInstance = fastify({
  logger: true
})

fastifyInstance.get('/', root)

fastifyInstance.listen(PORT, ADDRESS, (err) => {
  if (err) {
    app.log.error(err)
    
    process.exit(1)
  }
})