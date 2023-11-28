import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDistrictInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
