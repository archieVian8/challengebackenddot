import { Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt.auth.guard';

@Module({
  imports: [
    NestJwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecretKey', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  providers: [JwtAuthGuard],
  exports: [NestJwtModule, JwtAuthGuard],
})
export class JwtModule {}
