import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictResolver } from './district.resolver';

@Module({
  providers: [DistrictResolver, DistrictService]
})
export class DistrictModule {}
