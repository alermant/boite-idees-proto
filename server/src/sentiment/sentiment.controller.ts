import { Controller, Post, Body } from '@nestjs/common';
import { SentimentDto } from './sentiment-dto';
import { SentimentService } from './sentiment.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('sentiment')
export class SentimentController {
    constructor(private readonly sentimentService: SentimentService) {}
    @Post()
    @ApiOkResponse({description: 'Sentiment analysis result'})
    getSentiment(@Body() body: SentimentDto) {
        return this.sentimentService.analyze(body.documents);
    }
}
