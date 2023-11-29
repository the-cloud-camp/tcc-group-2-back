import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Station {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
