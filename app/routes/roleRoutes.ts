import { Router } from 'express';
import { rolesController } from '../controllers';
import {
	createRoleValidationRules,
	deleteRoleValidationRules,
	updateRoleValidationRules,
} from '../helpers/validators';
import { isAdminUser } from '../middlewares/adminMiddleware';
const roleRoutes = Router();

//For create a single role
roleRoutes.post(
	'/create',
	createRoleValidationRules,
	isAdminUser,
	rolesController.createRole
);
// For get single roles from that company
roleRoutes.get('/single-role/:id', rolesController.getARole);
// For get All the roles from that company
roleRoutes.get('/organization-roles/:id', rolesController.getAllRoles);
// for update the some role
roleRoutes.post(
	'/update-role',
	updateRoleValidationRules,
	isAdminUser,
	rolesController.updateRole
);
// for delete the role
roleRoutes.delete(
	'/',
	deleteRoleValidationRules,
	isAdminUser,
	rolesController.deleteRole
);

export default roleRoutes;
