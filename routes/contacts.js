import { Router } from 'express';
import contactsController from '../controllers/contacts.js';

const router = Router();

router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);
router.post('/', contactsController.createContact);
router.put('/update/:id', contactsController.updateContact);
router.delete('/delete/:id', contactsController.deleteContact);

export default router;
