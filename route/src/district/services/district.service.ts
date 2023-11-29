import { Injectable } from '@nestjs/common';
import { CreateDistrictInput } from '../models/create-district.input';
import { UpdateDistrictInput } from '../models/update-district.input';

@Injectable()
export class DistrictService {
  create(createDistrictInput: CreateDistrictInput) {
    return 'This action adds a new district';
  }

  findAll() {
    return `This action returns all district`;
  }

  findOne(id: number) {
    return `This action returns a #${id} district`;
  }

  update(id: number, updateDistrictInput: UpdateDistrictInput) {
    return `This action updates a #${id} district`;
  }

  remove(id: number) {
    return `This action removes a #${id} district`;
  }
}
