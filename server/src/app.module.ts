import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LdaModule } from './lda/lda.module';
import { SentimentModule } from './sentiment/sentiment.module';

@Module({
  imports: [LdaModule, SentimentModule],
  controllers: [AppController],
})
export class AppModule {}
