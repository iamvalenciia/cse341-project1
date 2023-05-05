import { Router } from 'express';
import contactsController from '../controllers/contacts.js';
const router = Router();

router.get('/', contactsController.getAll); // http://localhost:3000/contaacts/
router.get('/:id', contactsController.getSingle); // http://localhost:3000/contacts/id
router.post('/create-contact', contactsController.createContact); // http://localhost:3000/contacts/create-post

export default router;
