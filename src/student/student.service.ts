import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './student.entity';
import { StudentInput } from './student.input';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  async createStudent(studentInput: StudentInput): Promise<StudentEntity> {
    const student = this.studentRepository.create(studentInput);
    return this.studentRepository.save(student);
  }
}
