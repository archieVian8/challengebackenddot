import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EventOrganizerModule } from './eventorganizer/eventorganizer.module';
import { AcademiceventsModule } from './academicevents/academicevents.module';


@Module({
  imports: [UserModule, EventOrganizerModule, AcademiceventsModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
