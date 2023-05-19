import { Router } from 'express';
import contactsRouter from './contacts.js';
import { readFileSync } from 'fs';
import { serve, setup } from 'swagger-ui-express';
const loadJSON = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url)));
const swaggerDocument = loadJSON('../swagger.json');

const router = Router();

router.get('/', (req, res) => {
  res.send('API contacts');
});

router.use('/contacts', contactsRouter);
router.use('/api-docs', serve);
router.get('/api-docs', setup(swaggerDocument));

export default router;
