import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProvinceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
