import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entity';
import { Repository } from 'typeorm';
import { LessonDTO } from './dto/lesson.dto';
import { ObjectID } from 'mongodb';
import { LessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private lessonRepository: Repository<LessonEntity>,
  ) {}

  async getLesson(id: string): Promise<LessonEntity> {
    console.log(id, '--- searching lesson');
    const result = await this.lessonRepository.findOne({ _id: ObjectID(id) });
    console.log(result);
    return result;
  }

  async allLesson(): Promise<LessonEntity[]> {
    return await this.lessonRepository.find();
  }

  async createLesson(lessonInput: LessonInput): Promise<LessonEntity> {
    const result = this.lessonRepository.create(lessonInput);
    const savedLesson = await this.lessonRepository.save(result);
    console.log(savedLesson);
    return savedLesson;
  }
}
