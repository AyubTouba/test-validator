import { isExistDb, isLowerDb, isUniqueDb } from '@youba/nestjs-dbvalidator';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateUserDto {
  @isLowerDb({ table: 'user', column: 'phone' })
  @isExistDb({ table: 'user', column: 'phone' })
  phone: number;
}
