import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectID } from 'mongodb';

@Entity()
export class StudentEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
