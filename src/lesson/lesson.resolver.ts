import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { LessonDTO } from './dto/lesson.dto';
import { LessonEntity } from './lesson.entity';
import { LessonInput } from './lesson.input';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(() => LessonType)
  lesson(@Args('_id') _id: string): Promise<LessonEntity> {
    return this.lessonService.getLesson(_id);
  }

  @Query(() => [LessonType])
  lessons(): Promise<LessonEntity[]> {
    return this.lessonService.allLesson();
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args('lessonInput') lessonInput: LessonInput,
  ): Promise<LessonEntity> {
    return this.lessonService.createLesson(lessonInput);
  }
}
