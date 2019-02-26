import { Controller, Post, Body } from '@nestjs/common';
import { LdaService } from './lda.service';
import { LdaTopicDto } from './lda-topic-dto';
import { ApiResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('lda')
export class LdaController {
  constructor(private readonly ldaService: LdaService) {}

  @Post()
  @ApiOkResponse({description: 'LDA Topic modeling result'})
  getTopic(@Body() ldaTopicDto: LdaTopicDto) {
    return this.ldaService.getTopic(
      ldaTopicDto.documents,
      ldaTopicDto.topics,
      ldaTopicDto.words,
    );
  }
}
