import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Card {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  front: string;

  @Column()
  back: string;

  @Column()
  deckId: string;
}
