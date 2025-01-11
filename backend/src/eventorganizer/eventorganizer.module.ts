import { Module } from '@nestjs/common';
import { EventOrganizerController } from './eventorganizer.controller';
import { EventOrganizerService } from './eventorganizer.service';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtModule } from '../../auth/jwt.module';

@Module({
  imports: [JwtModule],
  controllers: [EventOrganizerController],
  providers: [EventOrganizerService, PrismaService],
})
export class EventOrganizerModule {}

