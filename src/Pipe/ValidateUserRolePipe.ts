import { PipeTransform, BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ValidateUserRolePipe implements PipeTransform {
  private readonly allowedRoles = ['admin', 'user', 'manager'];

  transform(value: any) {
    // Ensure the value is a string
    if (typeof value !== 'string') {
      throw new BadRequestException('Role must be a string');
    }

    // Check against allowed roles
    if (!this.allowedRoles.includes(value.toLowerCase())) {
      throw new BadRequestException(
        `Invalid role: '${value}'. Allowed roles are: ${this.allowedRoles.join(', ')}`,
      );
    }

    // Return normalized role (lowercase)
    return value.toLowerCase();
  }
}
