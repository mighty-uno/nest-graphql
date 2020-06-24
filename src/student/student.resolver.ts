import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentInput } from './student.input';
import { StudentEntity } from './student.entity';
import { StudentService } from './student.service';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => [StudentType])
  async students(): Promise<StudentEntity[]> {
    return this.studentService.getStudents();
  }

  @Query(() => StudentType)
  async studentById(@Args('id') id: string): Promise<StudentEntity> {
    return this.studentService.getStudentById(id);
  }

  @Mutation(() => StudentType)
  createStudent(
    @Args('studentInput') studentInput: StudentInput,
  ): Promise<StudentEntity> {
    return this.studentService.createStudent(studentInput);
  }
}
