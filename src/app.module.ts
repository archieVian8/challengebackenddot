import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EventOrganizerModule } from './eventorganizer/eventorganizer.module';
import { AcademiceventsModule } from './academicevents/academicevents.module';
import { JwtModule } from '.././auth/jwt.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    UserModule, 
    EventOrganizerModule, 
    AcademiceventsModule,
    JwtModule,
    PassportModule.register({ defaultStrategy: 'jwt' }) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
