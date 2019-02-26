import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LdaTopicDto {
  @IsString({ each: true })
  @ApiModelProperty({ description: 'Ideas', isArray: true, type: 'string' })
  documents: string[];

  @IsNumber()
  @ApiModelProperty({ description: 'Number of words by topic', type: 'number' })
  words: number;

  @IsNumber()
  @ApiModelProperty({ description: 'Number of topics', type: 'number' })
  topics: number;
}
