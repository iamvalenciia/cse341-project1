import { Router } from 'express';
import contactsRouter from './contacts.js';

const router = Router();

router.get('/', (req, res) => {
  res.send(`cse341 | Juan Pablo Valencia | 
    <a href="https://cse341valencia.onrender.com/contacts">https://cse341valencia.onrender.com/contacts</a>`);
});

router.use('/contacts', contactsRouter);

export default router;
