import express from 'express';
import { getAllUsers, getUserByRut } from '../controllers/userController';
import asyncHandler from '../utils/asyncHandler';

const router = express.Router();

router.get('/users', asyncHandler(getAllUsers));
router.get('/users/:rut', asyncHandler(getUserByRut));


export default router;
