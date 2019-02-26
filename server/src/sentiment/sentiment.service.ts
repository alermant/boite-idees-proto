import { Injectable } from '@nestjs/common';
import * as Sentiment from 'sentiment';
import { SentimentResult } from './sentiment-result';

@Injectable()
export class SentimentService {
    analyze(documents: string[]): SentimentResult[] {
    const sentiment = new Sentiment();
    return documents.map(document => sentiment.analyze(document));
  }
}
