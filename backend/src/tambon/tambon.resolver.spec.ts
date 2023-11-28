import { Test, TestingModule } from '@nestjs/testing';
import { TambonResolver } from './tambon.resolver';
import { TambonService } from './tambon.service';

describe('TambonResolver', () => {
  let resolver: TambonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TambonResolver, TambonService],
    }).compile();

    resolver = module.get<TambonResolver>(TambonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
