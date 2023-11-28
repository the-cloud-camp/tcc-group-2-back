import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TambonService } from './tambon.service';
import { Tambon } from './entities/tambon.entity';
import { CreateTambonInput } from './models/create-tambon.input';
import { UpdateTambonInput } from './models/update-tambon.input';

@Resolver(() => Tambon)
export class TambonResolver {
  constructor(private readonly tambonService: TambonService) {}

  @Mutation(() => Tambon)
  createTambon(
    @Args('createTambonInput') createTambonInput: CreateTambonInput,
  ) {
    return this.tambonService.create(createTambonInput);
  }

  @Query(() => [Tambon], { name: 'tambon' })
  findAll() {
    return this.tambonService.findAll();
  }

  @Query(() => Tambon, { name: 'tambon' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tambonService.findOne(id);
  }

  @Mutation(() => Tambon)
  updateTambon(
    @Args('updateTambonInput') updateTambonInput: UpdateTambonInput,
  ) {
    return this.tambonService.update(updateTambonInput.id, updateTambonInput);
  }

  @Mutation(() => Tambon)
  removeTambon(@Args('id', { type: () => Int }) id: number) {
    return this.tambonService.remove(id);
  }
}
