import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../../prisma/prisma.service'; 
import { JwtModule } from '../../auth/jwt.module';

@Module({
  imports: [JwtModule],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
