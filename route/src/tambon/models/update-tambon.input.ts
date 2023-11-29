import { CreateTambonInput } from './create-tambon.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTambonInput extends PartialType(CreateTambonInput) {
  @Field(() => Int)
  id: number;
}
