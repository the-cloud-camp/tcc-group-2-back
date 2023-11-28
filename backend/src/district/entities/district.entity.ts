import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { ProvinceEntity } from '../../province/entities/province.entity';

@Entity('tpj_district')
export class DistrictEntity {
  @PrimaryColumn({ name: 'id' })
  districtId!: number;

  @Column({ name: 'province_id', type: 'int8' })
  provinceId!: number;

  @ManyToOne(() => ProvinceEntity, (entity) => entity.provinceId)
  @JoinColumn({ name: 'province_id' })
  province?: ProvinceEntity;

  @Column({ name: 'districtThai', type: 'varchar', length: 255 })
  districtThaiText!: string;

  @Column({ name: 'districtEng', type: 'varchar', length: 255 })
  districtEngText!: string;
}
