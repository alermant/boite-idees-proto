import { Module } from '@nestjs/common';
import { LdaService } from './lda.service';
import { LdaController } from './lda.controller';

@Module({
  providers: [LdaService],
  controllers: [LdaController],
})
export class LdaModule {}
