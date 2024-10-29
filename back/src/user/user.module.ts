import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSchema } from './user.model';

@Module({
  imports:[

   MongooseModule.forFeature([{Name: 'User', Schema: UserSchema}])
  ], 
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
