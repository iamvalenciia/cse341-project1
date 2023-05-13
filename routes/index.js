import { Router } from 'express';
import contactsRouter from './contacts.js';
import dashBoard from '../home_view/index.js';
import { readFileSync } from 'fs';
import { serve, setup } from 'swagger-ui-express';
const loadJSON = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url)));
const swaggerDocument = loadJSON('../swagger.json');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const html = await dashBoard(
      req.session.successMessage,
      req.session.errorMessage,
      req.session.resultToUpdate
    ); // Pass the success message to the dashboard
    req.session.successMessage = ''; // Clear the messages
    req.session.errorMessage = '';
    req.session.resultToUpdate = '';
    res.send(html);
  } catch (err) {
    console.error('Error rendering dashboard:', err);
    next(err);
  }
});

router.use('/contacts', contactsRouter);
router.use('/api-docs', serve);
router.get('/api-docs', setup(swaggerDocument));

export default router;
