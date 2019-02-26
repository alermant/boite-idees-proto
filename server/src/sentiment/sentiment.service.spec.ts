import { Test, TestingModule } from '@nestjs/testing';
import { SentimentService } from './sentiment.service';
import { BadGatewayException } from '@nestjs/common';

describe('SentimentService', () => {
  let service: SentimentService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SentimentService],
    }).compile();
    service = module.get<SentimentService>(SentimentService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return value', async () => {
    expect(service.analyze(['bad.'])).toEqual([
      {
        comparative: -3,
        negative: ['bad'],
        positive: [],
        score: -3,
        tokens: ['bad'],
        words: ['bad'],
      },
    ]);
  });
});
