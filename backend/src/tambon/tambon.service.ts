import { Injectable } from '@nestjs/common';
import { CreateTambonInput } from './models/create-tambon.input';
import { UpdateTambonInput } from './models/update-tambon.input';

@Injectable()
export class TambonService {
  create(createTambonInput: CreateTambonInput) {
    return 'This action adds a new tambon';
  }

  findAll() {
    return `This action returns all tambon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tambon`;
  }

  update(id: number, updateTambonInput: UpdateTambonInput) {
    return `This action updates a #${id} tambon`;
  }

  remove(id: number) {
    return `This action removes a #${id} tambon`;
  }
}
