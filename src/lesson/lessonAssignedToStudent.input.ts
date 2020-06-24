import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class LessonAssignedToStudent {
  @Field(() => ID)
  lessonId: string;

  @Field(() => [ID])
  studentId: string[];
}
