import { Test, TestingModule } from '@nestjs/testing';
import { AcademiceventsService } from './academicevents.service';

describe('AcademiceventsService', () => {
  let service: AcademiceventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcademiceventsService],
    }).compile();

    service = module.get<AcademiceventsService>(AcademiceventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
