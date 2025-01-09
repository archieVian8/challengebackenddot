import { Module } from '@nestjs/common';
import { AcademiceventsController } from './academicevents.controller';
import { AcademiceventsService } from './academicevents.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [AcademiceventsController],
  providers: [AcademiceventsService, PrismaService]
})
export class AcademiceventsModule {}
