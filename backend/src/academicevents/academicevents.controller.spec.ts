import { Test, TestingModule } from '@nestjs/testing';
import { AcademiceventsController } from './academicevents.controller';

describe('AcademiceventsController', () => {
  let controller: AcademiceventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademiceventsController],
    }).compile();

    controller = module.get<AcademiceventsController>(AcademiceventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
