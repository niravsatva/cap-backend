import express from 'express';
import { customError, notFound } from '../helpers/errorHandler';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import companyRoutes from './companyRoutes';
import roleRoutes from './roleRoutes';
import permissionRoutes from './permissionRoutes';
import { isAuthenticated } from '../middlewares/authMiddleware';
import { Request, Response } from 'express';
const router = express.Router();
router.get('/test', (req: Request, res: Response) => {
	return res.json({ data: 'Hello world!' });
});

router.use('/auth', authRoutes);
router.use('/users', isAuthenticated, userRoutes);
router.use('/companies', isAuthenticated, companyRoutes);
router.use('/role', isAuthenticated, roleRoutes);
router.use('/permission', permissionRoutes);

router.use(notFound);
router.use(customError);

export default router;
