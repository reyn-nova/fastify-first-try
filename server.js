const fastify = require('fastify')

const { root } = require('./endpoints-functions.js')

const fastifyInstance = fastify({
  logger: true
})

fastifyInstance.get('/', root)

fastifyInstance.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    app.log.error(err)
    
    process.exit(1)
  }
})