import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { Deck } from './entities/deck.entity';

@Injectable()
export class DeckService {
  constructor(
    @InjectRepository(Deck)
    private deckRepository: Repository<Deck>,
  ) {}

  async create(createDeckDto: CreateDeckDto) {
    return await this.deckRepository.save(createDeckDto);
  }

  async findAll() {
    return await this.deckRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} deck`;
  }

  update(id: number, updateDeckDto: UpdateDeckDto) {
    return `This action updates a #${id} deck`;
  }

  remove(id: number) {
    return `This action removes a #${id} deck`;
  }
}
