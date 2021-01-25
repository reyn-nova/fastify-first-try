async function root(request, reply) {
  request.send({ message: 'Hello world!' })
}

module.exports = {
  root
}