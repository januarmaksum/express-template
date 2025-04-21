import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import env from './configs/env.config';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Docs',
      version: '1.0.0',
      contact: {
        name: 'Januar Maksum',
        url: 'https://github.com/januarmaksum',
        email: 'januarmaksum@gmail.com',
      },
      license: {
        name: 'Licence - MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
      tags: [
        {
          name: 'Users',
          description: 'User related endpoints',
        },
      ],
    },
    servers: [
      {
        url: `http://localhost:${env.PORT}`,
      },
    ],
  },
  apis: ['./src/docs/*.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  // app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use(
    '/api/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      explorer: true,
    })
  );
};
