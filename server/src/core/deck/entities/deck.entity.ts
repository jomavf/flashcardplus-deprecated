import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Deck {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  cards: string[];
}
