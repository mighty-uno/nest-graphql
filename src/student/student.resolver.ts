import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentInput } from './student.input';
import { StudentEntity } from './student.entity';
import { StudentService } from './student.service';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation(() => StudentType)
  createStudent(
    @Args('studentInput') studentInput: StudentInput,
  ): Promise<StudentEntity> {
    return this.studentService.createStudent(studentInput);
  }
}
