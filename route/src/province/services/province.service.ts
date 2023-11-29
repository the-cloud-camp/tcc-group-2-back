import { Injectable } from '@nestjs/common';
import { CreateProvinceInput } from '../models/create-province-input.model';
import { UpdateProvinceInput } from '../models/update-province-input.model';

@Injectable()
export class ProvinceService {
  create(createProvinceInput: CreateProvinceInput) {
    return 'This action adds a new province';
  }

  findAll() {
    return `This action returns all province`;
  }

  findOne(id: number) {
    return `This action returns a #${id} province`;
  }

  findByRegionId(id: number){
    
  }

  update(id: number, updateProvinceInput: UpdateProvinceInput) {
    return `This action updates a #${id} province`;
  }

  remove(id: number) {
    return `This action removes a #${id} province`;
  }
}
