import express from 'express';
import { test,UserUpdate,UserDelete,SignOut,getUsers } from '../Controllers/user.controller.js';
import { verifyToken } from '../UtilityCode/verifyUser.js';


const router = express.Router();

router.get('/test',test)
router.put('/update/:userId',verifyToken,UserUpdate)
router.delete('/delete/:userId',verifyToken,UserDelete)
router.get('/getusers',verifyToken,getUsers)
router.post('/signout',SignOut)

export default router;