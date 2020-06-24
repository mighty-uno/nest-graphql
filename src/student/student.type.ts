import { Field, ObjectType, ID } from '@nestjs/graphql';
import { ObjectID } from 'mongodb';

@ObjectType('Student')
export class StudentType {
  @Field(type => ID)
  _id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
