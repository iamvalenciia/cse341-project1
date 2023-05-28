import { Router } from 'express';
import postsController from '../controllers/posts.js';
import { validateGet, validatePost, validateUpdate } from '../validators/posts.js';

const router = Router();

router.get('/', validateGet, postsController.getAll);
router.get('/:id', validateGet, postsController.getSingle);
router.post('/', validatePost, postsController.createPost);
router.put('/update/:id', validateUpdate, postsController.updatePost);
router.delete('/delete/:id', postsController.deletePost);

export default router;
