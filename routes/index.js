import { Router } from 'express';
import contactsRouter from './contacts.js';
import dashBoard from '../views/index.js';

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

export default router;
