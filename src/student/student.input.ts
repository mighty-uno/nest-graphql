import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class StudentInput {
  @MinLength(5)
  @Field()
  firstName: string;

  @MinLength(2)
  @Field()
  lastName: string;
}
