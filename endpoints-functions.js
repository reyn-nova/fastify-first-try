async function root(request, reply) {
  reply.send({ message: 'Hello world!' })
}

module.exports = {
  root
}