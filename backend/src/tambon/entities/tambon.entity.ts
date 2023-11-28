import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { DistrictEntity } from '../../district/entities/district.entity';

@Entity('tpj_tambon')
export class TambonEntity {
  @PrimaryColumn({ name: 'id' })
  tambonId!: number;

  @Column({ name: 'postCode', type: 'int8' })
  postCode!: number;

  @Column({ name: 'district_id', type: 'int8' })
  districtId!: number;

  @ManyToOne(() => DistrictEntity, (entity) => entity.districtId)
  @JoinColumn({ name: 'district_id' })
  district?: DistrictEntity;

  @Column({ name: 'tambonThai', type: 'varchar', length: 255 })
  tambonThaiText!: string;

  @Column({ name: 'tambonEng', type: 'varchar', length: 255 })
  tambonEngText!: string;
}
