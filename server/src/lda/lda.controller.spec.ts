import { Test, TestingModule } from '@nestjs/testing';
import { LdaController } from './lda.controller';
import { LdaService } from './lda.service';
import { LdaTopicDto } from './lda-topic-dto';

describe('Lda Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [LdaController],
      providers: [LdaService],
    }).compile();
  });

  it('should be defined', () => {
    const controller: LdaController = module.get<LdaController>(LdaController);
    expect(controller).toBeDefined();
  });

  it('should return lda value', () => {
    const controller: LdaController = module.get<LdaController>(LdaController);
    const ldaTopicDto = {
      documents: ['phrase 1', 'phrase 2', 'phrase 3'],
      words: 1,
      topics: 1,
    } as LdaTopicDto;

    expect(controller.getTopic(ldaTopicDto)).toEqual([
      {words: [{ probability: 1, term: 'phrase' }], ideas: ['phrase 1', 'phrase 2', 'phrase 3']}
    ]);
  });
});
