import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LdaModule } from './lda/lda.module';
import { SentimentModule } from './sentiment/sentiment.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [LdaModule, SentimentModule, UploadModule],
  controllers: [AppController],
})
export class AppModule {}
