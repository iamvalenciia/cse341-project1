import { Router } from 'express';
import contactsRouter from './contacts.js';
import { readFileSync } from 'fs';
import { serve, setup } from 'swagger-ui-express';
const loadJSON = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url)));
const swaggerDocument = loadJSON('../swagger.json');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    res.send('API CONTACTS');
  } catch (err) {
    console.error('Error rendering dashboard:', err);
    next(err);
  }
});

router.use('/contacts', contactsRouter);
router.use('/api-docs', serve);
router.get('/api-docs', setup(swaggerDocument));

export default router;
