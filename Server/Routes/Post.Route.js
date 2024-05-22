import express from 'express';
import { verifyToken } from '../UtilityCode/verifyUser.js';
import { create, getposts, deletepost,update } from '../Controllers/Post.controller.js';

const router = express.Router();
router.post('/create',verifyToken,create);
router.get('/getposts',getposts);
router.delete('/deletepost/:postId/:userId',verifyToken,deletepost)
router.put('/updatepost/:postId/:userId',verifyToken,update)

export default router;