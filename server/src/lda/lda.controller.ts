import { Controller, Post, Body } from '@nestjs/common';
import { LdaService } from './lda.service';
import { LdaTopicDto } from './lda-topic-dto';
import { ApiResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('lda')
export class LdaController {
  constructor(private readonly ldaService: LdaService) {}

  @Post()
  @ApiResponse({status: 201, description: 'LDA Topic modeling result'})
  getTopic(@Body() ldaTopicDto: LdaTopicDto) {
    const data = this.ldaService.getTopic(
      ldaTopicDto.documents,
      ldaTopicDto.topics,
      ldaTopicDto.words,
    );
    const response = []
    let ideas = []
    for(const topic of data) {
      for(const word of topic) {
        for(const idea of ldaTopicDto.documents){
          if (idea.includes(word.term)){
            ideas.push(idea)
          }
        }
      }
      response.push({words: topic, ideas: ideas})
      ideas = []
    }
    return response
  }
}
