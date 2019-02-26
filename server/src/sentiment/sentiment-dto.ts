import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class SentimentDto {
    @ApiModelProperty({description: 'Ideas'})
    @IsString({each: true})
    documents: string[];
}
