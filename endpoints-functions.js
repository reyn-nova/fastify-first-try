async function root(request, reply) {
  return { message: 'Hello world!' }
}

module.exports = {
  root
}