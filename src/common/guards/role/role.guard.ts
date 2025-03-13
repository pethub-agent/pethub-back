import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "@prisma/client";
import { ROLES_KEY } from "src/common/decorators/roles/roles.decorator";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private relfector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.relfector.get<Role[]>(
      ROLES_KEY,
      context.getHandler(),
    );

    if (!requiredRoles) return true;

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.includes(user.role);
  }
}
