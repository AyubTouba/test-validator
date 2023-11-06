import {
  IsExist,
  IsUnique,
  isBiggerDb,
  isExistDb,
  isLowerDb,
  isUniqueDb,
} from '@youba/nestjs-dbvalidator';
import { IsNotEmpty, IsNumberString, Validate } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  //@Validate(IsUnique, [{ table: 'user', column: 'firstName' }])
  @IsNumberString()
  @isUniqueDb({ table: 'user', column: 'phone' })
  //@isExistDb({ table: 'user', column: 'firstName' })
  //@isLowerDb({ table: 'user', column: 'qual' })
  phone: number;
}
