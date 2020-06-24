import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { LessonDTO } from './dto/lesson.dto';
import { LessonEntity } from './lesson.entity';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(() => LessonType)
  lesson(@Args('_id') _id: string): Promise<LessonEntity> {
    return this.lessonService.getLesson(_id);
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ): Promise<LessonEntity> {
    return this.lessonService.createLesson({ name, startDate, endDate });
  }
}
