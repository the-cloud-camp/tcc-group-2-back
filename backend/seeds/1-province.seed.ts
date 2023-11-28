import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { ProvinceEntity } from '../src/province/entities/province.entity';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';

type csvOutput = {
  id: string;
  provinceThai: string;
  provinceEng: string;
  region: string;
};

export default class ProvinceSeed implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const provinceRepository = dataSource.getRepository(ProvinceEntity);
    await provinceRepository.query(
      `TRUNCATE ${provinceRepository.metadata.tableName} RESTART IDENTITY CASCADE`,
    );
    const provinces = await readProvinceCsv();
    // await provinceRepository.clear();
    await provinceRepository.save([...provinces]);
  }
}

async function readProvinceCsv(): Promise<ProvinceEntity[]> {
  const csvFilePath = path.resolve(__dirname, '../csv/province.csv');

  const headers = ['id', 'provinceThai', 'provinceEng', 'region'];

  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

  const provinces = await parseCSV(fileContent, headers);
  return provinces;
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
        const provinces = result.map((province) =>
          createProvince({
            provinceId: parseInt(province.id),
            provinceThaiText: province.provinceThai,
            provinceEngText: province.provinceEng,
            region: parseInt(province.region),
          }),
        );
        resolve(provinces);
      },
    );
  });
};

const createProvince = (params: ProvinceEntity): ProvinceEntity => {
  return {
    provinceId: params.provinceId,
    provinceThaiText: params.provinceThaiText,
    provinceEngText: params.provinceEngText,
    region: params.region,
  };
};
