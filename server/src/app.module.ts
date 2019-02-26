import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LdaModule } from './lda/lda.module';

@Module({
  imports: [LdaModule],
  controllers: [AppController],
})
export class AppModule {}
