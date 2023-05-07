import { Router } from 'express';
import contactsController from '../controllers/contacts.js';
const router = Router();

router.get('/', contactsController.getAll); // http://localhost:3000/contacts/
router.get('/:id', contactsController.getSingle); // http://localhost:3000/contacts/id
router.post('/create-contact', contactsController.createContact); // http://localhost:3000/contacts/create-post
router.get('/edit/:id', contactsController.editContact);
router.post('/update/:id', contactsController.updateContact);
router.post('/delete/:id', contactsController.deleteContact);

export default router;
