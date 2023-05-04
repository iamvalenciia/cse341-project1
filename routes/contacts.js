import { Router } from 'express';
import contactsController from '../controllers/contacts.js';
const router = Router();

router.get('/', contactsController.getAll); // http://localhost:3000/contaacts/
router.get('/:id', contactsController.getSingle); // http://localhost:3000/contacts/id

export default router;
