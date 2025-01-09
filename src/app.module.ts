import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EventOrganizerModule } from './eventorganizer/eventorganizer.module';

@Module({
  imports: [UserModule, EventOrganizerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
