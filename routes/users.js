import { Router } from 'express';
import usersController from '../controllers/users.js';
import {
  validateGet,
  validatePost,
  validateUpdate /*validateDelete*/
} from '../validators/users.js';

const router = Router();

router.get('/', validateGet, usersController.getAll);
router.get('/:id', validateGet, usersController.getSingle);
router.post('/', validatePost, usersController.createUser);
router.put('/update/:id', validateUpdate, usersController.updateUser);
router.delete('/delete/:id', /*validateDelete,*/ usersController.deleteUser);

export default router;
