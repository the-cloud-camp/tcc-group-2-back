import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialTables1700674482967 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "tpj_ticket" (
            "id" uuid PRIMARY KEY NOT NULL,
            "user" uuid NOT NULL,
            "route" integer NOT NULL,
            "status" integer NOT NULL,
            "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updated_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "boarding_time" timestamp NOT NULL
          );

          CREATE TABLE "tpj_user" (
            "id" uuid PRIMARY KEY NOT NULL,
            "firstname" varchar NOT NULL,
            "surname" varchar NOT NULL,
            "mobile_no" varchar NOT NULL,
            "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updated_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
          );

          CREATE TABLE "tpj_route" (
            "id" integer PRIMARY KEY,
            "from" integer NOT NULL,
            "to" integer NOT NULL,
            "price" integer NOT NULL,
            "status" varchar NOT NULL,
            "boarding_time" int NOT NULL,
            "duration" int NOT NULL,
            "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "update_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
          );

          CREATE TABLE "tpj_province" (
            "id" integer PRIMARY KEY,
            "provinceThai" varchar NOT NULL,
            "provinceEng" varchar NOT NULL,
            "region" integer NOT NULL
          );

          CREATE TABLE "tpj_district" (
            "id" integer PRIMARY KEY,
            "province_id" integer NOT NULL,
            "districtThai" varchar NOT NULL,
            "districtEng" varchar NOT NULL,
            CONSTRAINT tpj_district_province_id FOREIGN KEY (province_id) REFERENCES tpj_province(id)
          );

          CREATE TABLE "tpj_tambon" (
            "id" integer PRIMARY KEY,
            "tambonThai" varchar NOT NULL,
            "tambonEng" varchar NOT NULL,
            "postCode" integer NOT NULL,
            "district_id" integer NOT NULL,
            CONSTRAINT tpj_tambon_district_id FOREIGN KEY (district_id) REFERENCES tpj_district(id)
          );


        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('pgdb');
  }
}
