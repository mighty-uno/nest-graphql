import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { LessonDTO } from './dto/lesson.dto';
import { LessonEntity } from './lesson.entity';
import { LessonInput } from './lesson.input';
import { LessonAssignedToStudent } from './lessonAssignedToStudent.input';
import { StudentType } from 'src/student/student.type';
import { StudentService } from 'src/student/student.service';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  @Query(() => LessonType)
  lesson(@Args('_id') _id: string): Promise<LessonEntity> {
    return this.lessonService.getLesson(_id);
  }

  @Query(() => [LessonType])
  lessons(): Promise<LessonEntity[]> {
    return this.lessonService.allLesson();
  }

  @Mutation(() => LessonType)
  lessonAssignedToStudent(
    @Args('lessonAssignedInput') lessonAssignedInput: LessonAssignedToStudent,
  ): Promise<LessonEntity> {
    return this.lessonService.assignStudentToLesson(lessonAssignedInput);
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args('lessonInput') lessonInput: LessonInput,
  ): Promise<LessonEntity> {
    return this.lessonService.createLesson(lessonInput);
  }

  @ResolveField()
  async students(@Parent() lesson: LessonEntity): Promise<StudentType[]> {
    return this.studentService.getManyStudents(lesson.students);
  }
}
