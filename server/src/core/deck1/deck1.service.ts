import { Injectable } from '@nestjs/common';
import { CreateDeck1Dto } from './dto/create-deck1.dto';
import { UpdateDeck1Dto } from './dto/update-deck1.dto';

@Injectable()
export class Deck1Service {
  create(createDeck1Dto: CreateDeck1Dto) {
    return 'This action adds a new deck1';
  }

  findAll() {
    return `This action returns all deck1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deck1`;
  }

  update(id: number, updateDeck1Dto: UpdateDeck1Dto) {
    return `This action updates a #${id} deck1`;
  }

  remove(id: number) {
    return `This action removes a #${id} deck1`;
  }
}
