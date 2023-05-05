import { Router } from 'express';
import contactsRouter from './contacts.js';
import renderForm from '../views/insert-contact.js';

const router = Router();

router.get('/', renderForm);
router.use('/contacts', contactsRouter);

export default router;
