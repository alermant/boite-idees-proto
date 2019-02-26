import { Test, TestingModule } from '@nestjs/testing';
import { LdaService } from './lda.service';

describe('LdaService', () => {
  let service: LdaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LdaService],
    }).compile();
    service = module.get<LdaService>(LdaService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
