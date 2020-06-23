import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entity';
import { Repository } from 'typeorm';
import { LessonDTO } from './dto/lesson.dto';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private lessonRepository: Repository<LessonEntity>,
  ) {}

  async createLesson(lesson: LessonDTO): Promise<LessonEntity> {
    const result = this.lessonRepository.create(lesson);
    const savedLesson = await this.lessonRepository.save(result);
    console.log(savedLesson);
    return savedLesson;
  }
}
