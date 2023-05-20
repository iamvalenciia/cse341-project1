import { Router } from 'express';
import usersController from '../controllers/users.js';

const router = Router();

router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);
router.post('/', usersController.createUser);
router.put('/update/:id', usersController.updateUser);
router.delete('/delete/:id', usersController.deleteUser);

export default router;
