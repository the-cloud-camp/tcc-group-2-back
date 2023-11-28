import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';
import { DistrictEntity } from '../src/district/entities/district.entity';

type csvOutput = {
  id: string;
  provinceId: string;
  districtThai: string;
  districtEng: string;
};

export default class DistrictSeed implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const districtRepository = dataSource.getRepository(DistrictEntity);
    await districtRepository.query(
      `TRUNCATE ${districtRepository.metadata.tableName} RESTART IDENTITY CASCADE`,
    );
    const districts = await readDistrictCsv();
    // await districtRepository.clear();
    await districtRepository.save([...districts]);
  }
}

async function readDistrictCsv(): Promise<DistrictEntity[]> {
  const csvFilePath = path.resolve(__dirname, '../csv/district.csv');

  const headers = ['id', 'provinceId', 'districtThai', 'districtEng'];

  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

  const districts = await parseCSV(fileContent, headers);
  return districts;
}

const parseCSV = (fileContent: string, headers: string[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    parse(
      fileContent,
      {
        delimiter: ',',
        columns: headers,
      },
      (error, result: csvOutput[]) => {
        if (error) {
          console.error(error);
          reject(error);
        }
        result.shift();
        // console.log(result);
        const districts = result.map((district) =>
          createDistrict({
            districtId: parseInt(district.id),
            provinceId: parseInt(district.provinceId),
            districtThaiText: district.districtThai,
            districtEngText: district.districtEng,
          }),
        );
        resolve(districts);
      },
    );
  });
};

const createDistrict = (params: DistrictEntity): DistrictEntity => {
  return {
    districtId: params.districtId,
    provinceId: params.provinceId,
    districtThaiText: params.districtThaiText,
    districtEngText: params.districtEngText,
  };
};
