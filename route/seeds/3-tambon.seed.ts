import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';
import { DistrictEntity } from '../src/district/entities/district.entity';
import { TambonEntity } from '../src/tambon/entities/tambon.entity';

type csvOutput = {
  id: string;
  tambonThai: string;
  tambonEng: string;
  postcode: string;
  districtId: string;
};

export default class TambonSeed implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const tambonRepository = dataSource.getRepository(TambonEntity);
    await tambonRepository.query(
      `TRUNCATE ${tambonRepository.metadata.tableName} RESTART IDENTITY CASCADE`,
    );
    const tambons = await readTambonCsv();
    // await districtRepository.clear();
    await tambonRepository.save([...tambons]);
  }
}

async function readTambonCsv(): Promise<DistrictEntity[]> {
  const csvFilePath = path.resolve(__dirname, '../csv/tambon.csv');

  const headers = ['id', 'tambonThai', 'tambonEng', 'postcode', 'districtId'];

  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

  const tambons = await parseCSV(fileContent, headers);
  return tambons;
}

const parseCSV = (fileContent: string, headers: string[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    parse(
      fileContent,
      {
        delimiter: ',',
        columns: headers,
        relax_column_count: true,
      },
      (error, result: csvOutput[]) => {
        if (error) {
          console.error(error);
          reject(error);
        }
        result.shift();
        console.log(result);
        const tambons = result.map((tambon) =>
          createTambon({
            districtId: parseInt(tambon.districtId),
            postCode: parseInt(tambon.postcode),
            tambonEngText: tambon.tambonEng,
            tambonThaiText: tambon.tambonThai,
            tambonId: parseInt(tambon.id),
          }),
        );
        resolve(tambons);
      },
    );
  });
};

const createTambon = (params: TambonEntity): TambonEntity => {
  return {
    tambonId: params.tambonId,
    districtId: params.districtId,
    postCode: params.postCode,
    tambonEngText: params.tambonEngText,
    tambonThaiText: params.tambonThaiText,
  };
};
