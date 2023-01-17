import Fastify from 'fastify'

const app = Fastify()

app.get('/', () => {
    return 'Olá mundo'
})

app.listen({
    port: 3333
}).then(() => {
    console.log('Servidor HTTP rodando!')
})