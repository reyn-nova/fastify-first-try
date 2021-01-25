const fastify = require('fastify')
const PORT = process.env.PORT || 3000

const { root } = require('./endpoints-functions.js')

const fastifyInstance = fastify({
  logger: true
})

fastifyInstance.get('/', root)

fastifyInstance.listen(PORT, (err) => {
  if (err) {
    app.log.error(err)
    
    process.exit(1)
  }
})