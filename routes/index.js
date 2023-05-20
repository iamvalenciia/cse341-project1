import { Router } from 'express';
import usersRouter from './users.js';
import { readFileSync } from 'fs';
import { serve, setup } from 'swagger-ui-express';
const loadJSON = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url)));
const swaggerDocument = loadJSON('../swagger.json');

const router = Router();

router.get('/', (req, res) => {
  res.send('API users and posts | cse341-project1');
});

router.use('/users', usersRouter);
router.use('/api-docs', serve);
router.get('/api-docs', setup(swaggerDocument));

export default router;
