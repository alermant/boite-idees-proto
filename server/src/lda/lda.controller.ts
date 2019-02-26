import { Controller, Post, Body } from '@nestjs/common';
import { LdaService } from './lda.service';
import { LdaTopicDto } from './lda-topic-dto';

@Controller('lda')
export class LdaController {
  constructor(private readonly ldaService: LdaService) {}

  @Post()
  getTopic(@Body() ldaTopicDto: LdaTopicDto) {
    return this.ldaService.getTopic(
      ldaTopicDto.documents,
      ldaTopicDto.topics,
      ldaTopicDto.words,
    );
  }
}
