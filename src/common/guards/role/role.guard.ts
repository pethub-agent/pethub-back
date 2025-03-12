import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/common/decorators/roles/roles.decorator';
import { UserRole } from 'src/modules/users/entities/user.entity/user.entity';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private relfector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean  {
    const requiredRoles = this.relfector.get<UserRole[]>(ROLES_KEY, context.getHandler())

    if(!requiredRoles) return true

    const {user} = context.switchToHttp().getRequest()
    return requiredRoles.includes(user.role);
  }
}
