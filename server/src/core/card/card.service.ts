import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

Injectable();
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  async create(createCardDto: CreateCardDto) {
    return await this.cardRepository.save(createCardDto);
  }

  async findAll() {
    return await this.cardRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
