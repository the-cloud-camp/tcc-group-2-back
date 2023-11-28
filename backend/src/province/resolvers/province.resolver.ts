import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProvinceService } from '../services/province.service';
import { ProvinceEntity } from '../entities/province.entity';
import { CreateProvinceInput } from '../models/create-province-input.model';
import { UpdateProvinceInput } from '../models/update-province-input.model';

@Resolver(() => ProvinceEntity)
export class ProvinceResolver {
  constructor(private readonly provinceService: ProvinceService) {}

  @Mutation(() => ProvinceEntity)
  createProvince(
    @Args('createProvinceInput') createProvinceInput: CreateProvinceInput,
  ) {
    return this.provinceService.create(createProvinceInput);
  }

  @Query(() => [ProvinceEntity], { name: 'province' })
  provinces() {
    return this.provinceService.findAll();
  }

  @Query(() => ProvinceEntity, { name: 'province' })
  province(@Args('id', { type: () => Int }) id: number) {
    return this.provinceService.findOne(id);
  }

  @Query(() => ProvinceEntity, { name: 'province' })
  provincesFromRegion(@Args('id', { type: () => Int }) id: number) {
    return this.provinceService.findOne(id);
  }

  @Mutation(() => ProvinceEntity)
  updateProvince(
    @Args('updateProvinceInput') updateProvinceInput: UpdateProvinceInput,
  ) {
    return this.provinceService.update(
      updateProvinceInput.id,
      updateProvinceInput,
    );
  }

  @Mutation(() => ProvinceEntity)
  removeProvince(@Args('id', { type: () => Int }) id: number) {
    return this.provinceService.remove(id);
  }
}
