import { Module } from '@nestjs/common';
import { DistrictService } from './services/district.service';
import { DistrictResolver } from './resolvers/district.resolver';

@Module({
  providers: [DistrictResolver, DistrictService],
})
export class DistrictModule {}
