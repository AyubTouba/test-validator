import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DbValidatorsModule } from '@youba/nestjs-dbvalidator';

@Module({
  imports: [
    DbValidatorsModule.register({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: null,
      database: 'stackoverflow',
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
