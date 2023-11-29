import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TambonService } from '../services/tambon.service';
import { TambonEntity } from '../entities/tambon.entity';
import { CreateTambonInput } from '../models/create-tambon.input';
import { UpdateTambonInput } from '../models/update-tambon.input';

@Resolver(() => TambonEntity)
export class TambonResolver {
  constructor(private readonly tambonService: TambonService) {}

  @Mutation(() => TambonEntity)
  createTambon(
    @Args('createTambonInput') createTambonInput: CreateTambonInput,
  ) {
    return this.tambonService.create(createTambonInput);
  }

  @Query(() => [TambonEntity], { name: 'tambon' })
  findAll() {
    return this.tambonService.findAll();
  }

  @Query(() => TambonEntity, { name: 'tambon' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tambonService.findOne(id);
  }

  @Mutation(() => TambonEntity)
  updateTambon(
    @Args('updateTambonInput') updateTambonInput: UpdateTambonInput,
  ) {
    return this.tambonService.update(updateTambonInput.id, updateTambonInput);
  }

  @Mutation(() => TambonEntity)
  removeTambon(@Args('id', { type: () => Int }) id: number) {
    return this.tambonService.remove(id);
  }
}
