import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class LessonEntity {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
