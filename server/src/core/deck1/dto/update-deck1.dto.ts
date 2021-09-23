import { PartialType } from '@nestjs/mapped-types';
import { CreateDeck1Dto } from './create-deck1.dto';

export class UpdateDeck1Dto extends PartialType(CreateDeck1Dto) {
  id: number;
}
