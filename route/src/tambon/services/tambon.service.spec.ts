import { Test, TestingModule } from '@nestjs/testing';
import { TambonService } from './tambon.service';

describe('TambonService', () => {
  let service: TambonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TambonService],
    }).compile();

    service = module.get<TambonService>(TambonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
