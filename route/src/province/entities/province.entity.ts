import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Region } from '../enums/region.enum';
@Entity('tpj_province')
export class ProvinceEntity {
  @PrimaryColumn({ name: 'id' })
  provinceId!: number;

  @Column({ name: 'provinceThai', type: 'varchar', length: 255 })
  provinceThaiText!: string;

  @Column({ name: 'provinceEng', type: 'varchar', length: 255 })
  provinceEngText!: string;

  @Column({ name: 'region', type: 'int4' })
  region!: Region;
}
