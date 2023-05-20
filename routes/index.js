import { Router } from 'express';
import usersRouter from './users.js';
import postsRouter from './posts.js';
import { readFileSync } from 'fs';
import { serve, setup } from 'swagger-ui-express';
const loadJSON = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url)));
const swaggerDocument = loadJSON('../swagger.json');

const router = Router();

router.get('/', (req, res) => {
  res.send('API users and posts | cse341-project1');
  /*#swagger.tags = ['Default']*/
});

router.use('/users', usersRouter /*#swagger.tags = ['Users']*/);
router.use('/posts', postsRouter /*#swagger.tags = ['Posts']*/);

router.use('/api-docs', serve);
router.get(
  '/api-docs',
  setup(swaggerDocument)
  /*#swagger.tags = ['Swagger']*/
);

export default router;
