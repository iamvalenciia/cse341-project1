import { Router } from 'express';
import contactsRouter from './contacts.js';
import dashBoard from '../views/index.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const html = await dashBoard(); // Await the promise returned by dashBoard
    res.send(html); // Send the response once the promise resolves
  } catch (err) {
    console.error('Error rendering dashboard:', err);
    next(err);
  }
});

router.use('/contacts', contactsRouter);

export default router;
