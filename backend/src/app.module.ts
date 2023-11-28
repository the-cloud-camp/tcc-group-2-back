import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { ProvinceModule } from './province/province.module';
import { addTransactionalDataSource } from 'typeorm-transactional';
import connectionOptions from '../ormconfig';
import { DataSource } from 'typeorm';
import { DistrictModule } from './district/district.module';
import { TambonModule } from './tambon/tambon.module';
import 'dotenv/config';

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
    CustomerModule,
    AdminModule,
    ProvinceModule,
    DistrictModule,
    TambonModule,
  ],
  providers: [AppService],
})
export class AppModule {}
