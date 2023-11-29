import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DistrictService } from '../services/district.service';
import { DistrictEntity } from '../entities/district.entity';
import { CreateDistrictInput } from '../models/create-district.input';
import { UpdateDistrictInput } from '../models/update-district.input';

@Resolver(() => DistrictEntity)
export class DistrictResolver {
  constructor(private readonly districtService: DistrictService) {}

  @Mutation(() => DistrictEntity)
  createDistrict(
    @Args('createDistrictInput') createDistrictInput: CreateDistrictInput,
  ) {
    return this.districtService.create(createDistrictInput);
  }

  @Query(() => [DistrictEntity], { name: 'district' })
  findAll() {
    return this.districtService.findAll();
  }

  @Query(() => DistrictEntity, { name: 'district' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.districtService.findOne(id);
  }

  @Mutation(() => DistrictEntity)
  updateDistrict(
    @Args('updateDistrictInput') updateDistrictInput: UpdateDistrictInput,
  ) {
    return this.districtService.update(
      updateDistrictInput.id,
      updateDistrictInput,
    );
  }

  @Mutation(() => DistrictEntity)
  removeDistrict(@Args('id', { type: () => Int }) id: number) {
    return this.districtService.remove(id);
  }
}
