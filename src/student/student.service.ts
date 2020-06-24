import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './student.entity';
import { StudentInput } from './student.input';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  async getStudents(): Promise<StudentEntity[]> {
    return await this.studentRepository.find();
  }

  async getStudentById(_id: string): Promise<StudentEntity> {
    return await this.studentRepository.findOne({ _id: ObjectID(_id) });
  }

  async createStudent(studentInput: StudentInput): Promise<StudentEntity> {
    const student = this.studentRepository.create(studentInput);
    return this.studentRepository.save(student);
  }

  async getManyStudents(ids: string[]) {
    return await this.studentRepository.find({
      _id: { $in: ids.map(id => ObjectID(id)) },
    });
  }
}
