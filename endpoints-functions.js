async function root(request, reply) {
  reply
  .code(200)
  .header('Content-Type', 'application/json; charset=utf-8')
  .send({ message: 'Hello world!' })
}

module.exports = {
  root
}