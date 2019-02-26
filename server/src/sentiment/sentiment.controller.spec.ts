import { Test, TestingModule } from '@nestjs/testing';
import { SentimentController } from './sentiment.controller';
import { SentimentService } from './sentiment.service';

describe('Sentiment Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SentimentController],
      providers: [SentimentService],
    }).compile();
  });

  it('should be defined', () => {
    const controller: SentimentController = module.get<SentimentController>(
      SentimentController,
    );
    expect(controller).toBeDefined();
  });

  it('should return sentiment', () => {
    const controller: SentimentController = module.get<SentimentController>(
      SentimentController,
    );
    expect(controller.getSentiment({documents: ['bad stuff', 'good stuff']})).toBeDefined();
  });
});
