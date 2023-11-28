import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DistrictService } from './district.service';
import { District } from './entities/district.entity';
import { CreateDistrictInput } from './models/create-district.input';
import { UpdateDistrictInput } from './models/update-district.input';

@Resolver(() => District)
export class DistrictResolver {
  constructor(private readonly districtService: DistrictService) {}

  @Mutation(() => District)
  createDistrict(
    @Args('createDistrictInput') createDistrictInput: CreateDistrictInput,
  ) {
    return this.districtService.create(createDistrictInput);
  }

  @Query(() => [District], { name: 'district' })
  findAll() {
    return this.districtService.findAll();
  }

  @Query(() => District, { name: 'district' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.districtService.findOne(id);
  }

  @Mutation(() => District)
  updateDistrict(
    @Args('updateDistrictInput') updateDistrictInput: UpdateDistrictInput,
  ) {
    return this.districtService.update(
      updateDistrictInput.id,
      updateDistrictInput,
    );
  }

  @Mutation(() => District)
  removeDistrict(@Args('id', { type: () => Int }) id: number) {
    return this.districtService.remove(id);
  }
}
