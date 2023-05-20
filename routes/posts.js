import { Router } from 'express';
import postsController from '../controllers/posts.js';

const router = Router();

router.get('/', postsController.getAll);
router.get('/:id', postsController.getSingle);
router.post('/', postsController.createPost);
router.put('/update/:id', postsController.updatePost);
router.delete('/delete/:id', postsController.deletePost);

export default router;
