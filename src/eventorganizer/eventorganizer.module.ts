import { Module } from '@nestjs/common';
import { EventOrganizerController } from './eventorganizer.controller';
import { EventOrganizerService } from './eventorganizer.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [EventOrganizerController],
  providers: [EventOrganizerService, PrismaService],
})
export class EventOrganizerModule {}

