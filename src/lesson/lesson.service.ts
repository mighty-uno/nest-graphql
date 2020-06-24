import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entity';
import { Repository } from 'typeorm';
import { LessonDTO } from './dto/lesson.dto';
import { ObjectID } from 'mongodb';

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

  async createLesson(lesson: LessonDTO): Promise<LessonEntity> {
    const result = this.lessonRepository.create(lesson);
    const savedLesson = await this.lessonRepository.save(result);
    console.log(savedLesson);
    return savedLesson;
  }
}
