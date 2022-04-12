import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/enum';

export const ROLES_KEY = 'role';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
