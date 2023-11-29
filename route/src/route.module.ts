import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinceModule } from './province/province.module';
import { addTransactionalDataSource } from 'typeorm-transactional';
import connectionOptions from '../ormconfig';
import { DataSource } from 'typeorm';
import { DistrictModule } from './district/district.module';
import { TambonModule } from './tambon/tambon.module';
import 'dotenv/config';
import { StationModule } from './station/station.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useFactory() {
        return { ...connectionOptions, autoLoadEntities: true };
      },
      dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid options passed');
        }

        return Promise.resolve(
          addTransactionalDataSource(new DataSource(options)),
        );
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProvinceModule,
    DistrictModule,
    TambonModule,
    StationModule,
  ],
  providers: [],
})
export class RouteModule {}
