export default async (fastify) => {
  fastify.options('/', (req, rep) => {
    rep.header('Access-Control-Allow-Origin', '*');
    rep.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    rep.header('Access-Control-Allow-Headers', 'Content-Type');
    rep.code(204).send();
  });
};
