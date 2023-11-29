import { Module } from '@nestjs/common';
import { StationService } from './services/station.service';
import { StationResolver } from './resolvers/station.resolver';

@Module({
  providers: [StationResolver, StationService],
})
export class StationModule {}
