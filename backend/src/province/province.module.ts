import { Module } from '@nestjs/common';
import { ProvinceService } from './services/province.service';
import { ProvinceResolver } from './resolvers/province.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinceEntity } from './entities/province.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProvinceEntity])],
  providers: [ProvinceResolver, ProvinceService],
})
export class ProvinceModule {}
