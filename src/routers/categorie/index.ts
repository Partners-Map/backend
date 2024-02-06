// import { FastifyInstance } from 'fastify';
// import {
//   getCategorieById,
//   createCategorie,
//   updateCategorie,
//   deleteCategorie
// } from '../../controllers/categorie';

// export default async (fastify: FastifyInstance) => {
//   fastify.get<{
//     Params: {
//       id: string;
//     };
//   }>(
//     '/:id',
//     {
//       schema: {
//         params: {
//           type: 'object',
//           properties: {
//             id: {
//               type: 'string'
//             }
//           },
//           required: ['id']
//         },
//         tags: ['categorie']
//       }
//     },
//     async (req, rep) => {
//       const { id: categorieId } = req.params;
//       rep.code(200).send(await getCategorieById(fastify, categorieId));
//     }
//   );
//   fastify.post<{
//     Body: {
//       title: string;
//     };
//   }>(
//     '/',
//     {
//       schema: {
//         body: {
//           type: 'object',
//           properties: {
//             title: {
//               type: 'string'
//             }
//           },
//           required: ['title']
//         },
//         tags: ['categorie']
//       }
//     },
//     async (req, rep) => {
//       const { title } = req.body;
//       rep.code(200).send(await createCategorie(fastify, title));
//     }
//   );
//   fastify.put<{
//     Params: {
//       id: string;
//     };
//     Body: {
//       title: string;
//     };
//   }>(
//     '/:id',
//     {
//       schema: {
//         params: {
//           type: 'object',
//           properties: {
//             id: {
//               type: 'string'
//             }
//           },
//           required: ['id']
//         },
//         body: {
//           type: 'object',
//           properties: {
//             title: {
//               type: 'string'
//             }
//           },
//           required: ['title']
//         },
//         tags: ['categorie']
//       }
//     },
//     async (req, rep) => {
//       const { id: categorieId } = req.params;
//       const { title } = req.body;
//       rep.code(200).send(await updateCategorie(fastify, categorieId, title));
//     }
//   );
//   fastify.delete<{
//     Params: {
//       id: string;
//     };
//   }>(
//     '/:id',
//     {
//       schema: {
//         params: {
//           type: 'object',
//           properties: {
//             id: {
//               type: 'string'
//             }
//           },
//           required: ['id']
//         },
//         tags: ['categorie']
//       }
//     },
//     async (req, rep) => {
//       const { id: categorieId } = req.params;
//       rep.code(200).send(await deleteCategorie(fastify, categorieId));
//     }
//   );
// };
