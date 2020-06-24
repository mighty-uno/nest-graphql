import { Field, InputType, ID } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class LessonInput {
  @MinLength(1)
  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
