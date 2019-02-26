import { Injectable } from '@nestjs/common';
import * as lda from 'lda';

@Injectable()
export class LdaService {
  getTopic(documents: string[], topics: number, words: number) {
    return lda(documents, topics, words);
  }
}
