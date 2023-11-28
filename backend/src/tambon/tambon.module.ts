import { Module } from '@nestjs/common';
import { TambonService } from './tambon.service';
import { TambonResolver } from './tambon.resolver';

@Module({
  providers: [TambonResolver, TambonService]
})
export class TambonModule {}
