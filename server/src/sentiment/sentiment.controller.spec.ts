import { Test, TestingModule } from '@nestjs/testing';
import { SentimentController } from './sentiment.controller';

describe('Sentiment Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SentimentController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SentimentController = module.get<SentimentController>(
      SentimentController,
    );
    expect(controller).toBeDefined();
  });
});
