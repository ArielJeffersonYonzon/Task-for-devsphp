import Fastify from "fastify";

const fastify = Fastify({
    logger: true
});

fastify.get('/', (req, reply) => {
    return{
        message: 'Hello World!'
    };
});

try {
    fastify.listen({ port: 3002 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1)
}