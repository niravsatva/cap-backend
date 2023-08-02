import express from 'express';
import { userController } from '../controllers';
import {
	deleteUserFromCompanyRules,
	inviteUserValidationRules,
	updateUserByAdminValidation,
} from '../helpers/validators';
import { isAdminUser } from '../middlewares/adminMiddleware';
const router = express.Router();

// Get All Users
router.get('/', userController.getAllUsers);

// Get User Details By Id
router.get('/:id', userController.getUserDetails);

// Create New User (Temporary Api)
router.post('/', userController.createUser);

// Update User by Id
router.put('/', updateUserByAdminValidation, userController.updateUser);

// Invite New User
router.post(
	'/invite-user',
	inviteUserValidationRules,
	userController.inviteUser
);

// Delete User From Particular Company
router.delete(
	'/',
	isAdminUser,
	deleteUserFromCompanyRules,
	userController.deleteUser
);

// Integrate user with company (Temporary Api)
router.post('/integrate', userController.integrate);

export default router;
