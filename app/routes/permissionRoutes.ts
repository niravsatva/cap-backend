import { Router } from 'express';
import { permissionController } from '../controllers';
import { isAuthenticated } from '../middlewares/authMiddleware';
import { permissionRoleValidationRules } from '../helpers/validators';
import { isAdminUser } from '../middlewares/adminMiddleware';
const permissionRoute = Router();

//For get the permissions based on the role
permissionRoute.get(
	'/:id',
	isAuthenticated,
	isAdminUser,
	permissionController.getAllPermission
);

// for update the permission of some role
permissionRoute.post(
	'/update-permission',
	permissionRoleValidationRules,
	isAuthenticated,
	isAdminUser,
	permissionController.updatePermission
);

export default permissionRoute;
