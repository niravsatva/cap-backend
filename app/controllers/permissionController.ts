import { NextFunction, Request, Response } from 'express';
import { permissionRepository } from '../repositories';
import { DefaultResponse } from '../helpers/defaultResponseHelper';
import { checkValidation } from '../helpers/validationHelper';
import permissionService from '../services/permissionService';
class PermissionController {
	async getAllPermission(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;
			const permissions = await permissionRepository.getRolePermissions(id);
			return DefaultResponse(
				res,
				200,
				'Permissions fetched successfully',
				permissions
			);
		} catch (err) {
			next(err);
		}
	}
	async updatePermission(req: Request, res: Response, next: NextFunction) {
		try {
			checkValidation(req);
			const { orgId, roleId, permissions } = req.body;
			await permissionService.updatePermission(orgId, roleId, permissions);
			return DefaultResponse(res, 202, 'Permission updated successfully');
		} catch (err) {
			next(err);
		}
	}
}

export default new PermissionController();
