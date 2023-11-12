import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';

import { container } from '../../libs/invesifyConfig';

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(express.json());
});

export const app = server.build();
