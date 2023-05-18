import { Router } from 'express';
import contactsController from '../controllers/contacts.js';

const router = Router();

router.get('/', contactsController.getAll); // http://localhost:3000/contacts/
router.get('/:id', contactsController.getSingle); // http://localhost:3000/contacts/:id
router.post('/', contactsController.createContact); // http://localhost:3000/contacts/create
router.put('/update/:id', contactsController.updateContact); // http://localhost:3000/contacts/update/:id
router.delete('/delete/:id', contactsController.deleteContact); // http://localhost:3000/contacts/delete/:id

export default router;
