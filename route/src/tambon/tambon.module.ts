import { Module } from '@nestjs/common';
import { TambonService } from './services/tambon.service';
import { TambonResolver } from './resolvers/tambon.resolver';

@Module({
  providers: [TambonResolver, TambonService],
})
export class TambonModule {}
